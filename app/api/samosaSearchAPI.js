import utils from '../utils/utils';
import positions from '../constants/positions';

const samosaSearchAPI = {
    saleList: [],
    i:0,
    neededConfirmations: 3,
    location:{
        lat: 45.50492,
        lon: -73.57616
    },
    defaultLocation:{
        lat: 45.50492,
        lon: -73.57616
    },
    keyMap: {},
    cachedDistances: [],
    getLocation(success, error){
        if(!navigator.geolocation) {
            return null;
        }
        else{
            return navigator.geolocation.getCurrentPosition((pos)=> {
                this.location.lat = pos.coords.latitude;
                this.location.lon = pos.coords.longitude;
                success(pos);
            }, error);
        }
    },
    /**
     * Given a sale List we first get an array-like Object containing unique keys
     * we then return an array generated from such an object
     * @param saleList an array of sales
     * @returns {Array.<T>} an array of {positions,count}
     */
    getTags(saleList){
        let pos = null;
        let length = 0;
        let uniqueKeyCount = saleList.reduce(function(prev, next){
            pos = positions[next.loc];
            // if we have a previous location value, we increment the count there.
            if(prev[next.loc]){
                prev[next.loc].count +=1;
            }
            // Otherwise, we give a new object containing the position and a count of 1
            else{
                prev[next.loc] = {position: {lat: pos.lat, lng: pos.lon}, count: 1};
                length +=1;
            }
            return prev;
        },{});
        uniqueKeyCount.length = length;
        return Array.prototype.slice.call(uniqueKeyCount);
    },
    getMapFromLocation(latitude, longitude, saleList, width, height){
        let httpSrc = 'https://dev.virtualearth.net/REST/V1/Imagery/Map/Road';
        let mapKey = BING_KEY;
        let pos = null;
        let saleLocations = saleList.reduce(function(prev, next){
            pos = positions[next.loc];
            prev[next.loc] = prev[next.loc] || {lat: pos.lat, lon: pos.lon, count: 0};
            prev[next.loc].count += 1;
            return prev;
        },{});
        let loc = null;
        let pushPins = '';
        for(let key in saleLocations){
            if(saleLocations.hasOwnProperty(key)) {
                loc = saleLocations[key];
                pushPins += `&pushpin=${loc.lat}%2C${loc.lon};56;${loc.count}`;
            }
        }
        return `${httpSrc}/${latitude}%2C${longitude}/16?mapSize=${width},${height}&format=png${pushPins}&key=${mapKey}`;
    },
    /**
     * get distances from an array of sales, either from the cache
     * or by making a request to an external server
     * @param arr
     * @returns {*}
     */
    getDistances(arr){
        //we get the unique locations of the given array of sales
        let newKeyMap = this._getUniqueKeys(arr);
        this._prepareMap(newKeyMap);
        //for every location in the new map, we already have a valid location
        //so we use the cache
        if(Object.keys(newKeyMap).every(el => this.keyMap.hasOwnProperty(el))){
            console.log('using cached locations');
            return Promise.resolve(this._setDistances(this.cachedDistances, newKeyMap));
        }
        //we make a request to an external server
        else{
            let locations = this._getPreparedLocations(newKeyMap);
            return this.requestDistances(locations).then((results)=> {
                //we parse the results given by the server to valid distances
                results.one_to_many[0].shift();
                let distances = results.one_to_many[0];
                //we update the cached distances, the keyMap and return the updated keyMap
                this.cachedDistances = distances;
                return this._setDistances(distances, newKeyMap);
            });
        }
    },
    _getUniqueKeys(arr){
        return arr.reduce(function(prev,next){
            prev[next.loc] = true;
            return prev;
        },{});
    },
    _prepareMap(map){
        let index = 0;
        for(let key in map){
            if(map.hasOwnProperty(key)){
                map[key] = index++;
            }
        }
    },
    _getPreparedLocations(map){
        return JSON.stringify(Object.keys(map).reduce(function(prev,next){
            prev.push(positions[map[next]]);
            return prev;
        }, [this.location]));
    },
    _setDistances(distances, map){
        for(let key in map){
            if(map.hasOwnProperty(key)) {
                map[key] = distances[map[key]];
            }
        }
        this.keyMap = map;
        return this.keyMap;
    },
    /**
     * make GET request to an external server and get distances (in km)
     * @param locations String a stringfied array of locations
     * @returns resulting distances in km
     */
    requestDistances(locations){
        let httpSrc = 'https://matrix.mapzen.com/one_to_many?json';
        let key = MAPZEN_MATRIX_KEY;
        let url = `${httpSrc}={"locations":${locations},"costing":"pedestrian"}&id=mosa&api_key=${key}`;
        //perform the actual GET request and parse it
        return utils.getJSON(url);
    }
};

export default samosaSearchAPI;