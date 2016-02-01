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
    createSale(options){
        this.saleList = this.saleList.concat({
            id: ""+this.i++,
            saleLocation: options.saleLocation,
            price: options.price,
            time: options.time,
            info: options.info,
            confirmations: 0
        });
    },
    getSale(saleId){
        return this.saleList.find((sale)=> (sale.id === saleId));
    },
    updateSale(saleId, props){
        let sale = this.saleList.find((sale)=> (sale.id === saleId));
        sale.saleLocation = props.saleLocation;
        sale.price= props.price;
        sale.time = props.time;
        sale.info = props.info;
        sale.confirmations = 0;
    },
    removeSale(saleId){
        this.saleList = this.saleList.filter((sale)=> (sale.id !== saleId));
    },

    getLocation(success, error){
        if(!navigator.geolocation) {
            return null;
        }
        else{
            return navigator.geolocation.getCurrentPosition((pos)=> {
                this.location.lat = pos.coords.latitude;
                this.location.lon = pos.coords.longitude
                success(pos);
            }, error);
        }
    },
    getMapFromLocation(latitude, longitude, saleList, width){
        let httpSrc = "http://dev.virtualearth.net/REST/V1/Imagery/Map/Road";
        let key = "AgvN-k6j9HKA9D-iYt0dqy7WTIvRA5Qiqd9EOFOh3McCI1_IJE4QjHT8KojWfvdv";
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
        return `${httpSrc}/${latitude}%2C${longitude}/16?mapSize=${width},300&format=png${pushPins}&key=${key}`;
    },
    uniqueKeys(arr){
        return arr.reduce(function(prev,next){
            prev[next.loc] = true;
            return prev;
        },{});
    },
    stringifyLocations(map){
        let index = 0;
        let locations = [this.location];
        for(let key in map){
            if(map.hasOwnProperty(key)){
                map[key] = index++;
                locations.push(positions[map[key]]);
            }
        }
        return JSON.stringify(locations);
    },
    getDistances(arr){
        this.keyMap = this.uniqueKeys(arr);
        let locations = this.stringifyLocations(this.keyMap);
        return this.getClosestSale(locations).then((res)=> this._setDistances(res));
    },
    _setDistances(results){
        results.one_to_many[0].shift();
        let distances = results.one_to_many[0];
        for(let key in this.keyMap){
            if(this.keyMap.hasOwnProperty(key)) {
                this.keyMap[key] = distances[this.keyMap[key]];
            }
        }
        return this.keyMap;
    },
    getClosestSale(locations){
        let httpSrc = "http://matrix.mapzen.com/one_to_many?json";
        let key = "matrix-K69EU2Q";
        locations = locations || `[{"lat":40.744014,"lon":-73.990508},{"lat":40.739735,"lon":-73.979713}]`;
        let url = `${httpSrc}={"locations":${locations},"costing":"pedestrian"}&id=mosa&api_key=${key}`;
        return utils.getJSON(url);
    }
};

export default samosaSearchAPI;