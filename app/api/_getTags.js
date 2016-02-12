import positions from '../constants/positions';

/**
 * Given a sale List we first get an array-like Object containing unique keys
 * we then return an array generated from such an object
 * @param saleList an array of sales
 * @returns {Array.<T>} an array of {positions,count}
 */
function _getTags(saleList){
    let pos = null;
    let uniqueKeyCount = saleList.reduce(function(prev, next){
        pos = positions[next.loc];
        // if we have a previous location value, we increment the count there.
        if(prev[next.loc]){
            prev[next.loc].count +=1;
        }
        // Otherwise, we give a new object containing the position and a count of 1
        else{
            prev[next.loc] = {position: {lat: pos.lat, lng: pos.lon}, count: 1};
        }
        return prev;
    },{});
    return Object.keys(uniqueKeyCount).map(key=>uniqueKeyCount[key]);
}
export default _getTags;