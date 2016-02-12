import positions from '../constants/positions';
import providers from '../constants/providers';

let keyMap = {};
let cachedDistances = [];
/**
 * get distances from an array of sales, either from the cache
 * or by making a request to an external server
 * @param arr
 * @returns {*}
 */
function _getUniqueKeys(arr){
    return arr.reduce(function(prev,next){
        prev[next.loc] = true;
        return prev;
    },{});
}
function _prepareMap(map){
    let index = 0;
    for(let key in map){
        if(map.hasOwnProperty(key)){
            map[key] = index++;
        }
    }
}
function _getPreparedLocations(initialLocation, map){
    return JSON.stringify(Object.keys(map).reduce(function(prev,next){
        prev.push(positions[map[next]]);
        return prev;
    }, [initialLocation]));
}
function _setDistances(distances, map){
    for(let key in map){
        if(map.hasOwnProperty(key)) {
            map[key] = distances[map[key]];
        }
    }
    keyMap = map;
    return keyMap;
}
/**
 * make GET request to an external server and get distances (in km)
 * @param locations String a stringfied array of locations
 * @returns resulting distances in km
 */
function _requestDistances(locations){
    let httpSrc = 'https://matrix.mapzen.com/one_to_many?json';
    let key = providers.MAPZEN_MATRIX_KEY;
    let url = `${httpSrc}={"locations":${locations},"costing":"pedestrian"}&id=mosa&api_key=${key}`;

    //perform the actual GET request and parse it
    return fetch(url).then(res=>res.json());
}
function getDistances(initialLocation, arr){
    //we get the unique locations of the given array of sales
    let newKeyMap = _getUniqueKeys(arr);
    _prepareMap(newKeyMap);
    //for every location in the new map, we already have a valid location
    //so we use the cache
    if(Object.keys(newKeyMap).every(el => keyMap.hasOwnProperty(el))){
        console.log('using cached locations');
        return Promise.resolve(_setDistances(cachedDistances, newKeyMap));
    }
    //we make a request to an external server
    else{
        let locations = _getPreparedLocations(initialLocation, newKeyMap);
        return _requestDistances(locations).then((results)=> {
            //we parse the results given by the server to valid distances
            results.one_to_many[0].shift();
            let distances = results.one_to_many[0];
            //we update the cached distances, the keyMap and return the updated keyMap
            cachedDistances = distances;
            return _setDistances(distances, newKeyMap);
        }).catch(err => console.log(err));
    }
}
function reset(){
    keyMap = {};
    cachedDistances = [];
}
export {getDistances, reset};