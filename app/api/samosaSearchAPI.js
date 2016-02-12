import _getLocation from './_getLocation';
import _getTags from './_getTags';
import {getDistances as _getDistances,reset as _resetDistances} from './_getDistances';

const samosaSearchAPI = {
    saleList: [],
    location:{
        lat: 45.50492,
        lon: -73.57616
    },
    defaultLocation:{
        lat: 45.50492,
        lon: -73.57616
    },
    getLocation: function getLocation(success, error){
        return _getLocation(this.location, success, error);
    },
    getTags: _getTags,
    getDistances: function getDistances(arr){
        return _getDistances(this.location, arr);
    },
    resetDistances: function resetDistances(){
        _resetDistances();
    }
};

export default samosaSearchAPI;