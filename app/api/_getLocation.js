function _getLocation(location, success, error){
    if(!navigator.geolocation) {
        return null;
    }
    else{
        return navigator.geolocation.getCurrentPosition((pos)=> {
            location.lat = pos.coords.latitude;
            location.lon = pos.coords.longitude;
            success(pos);
        }, error);
    }
}
export default _getLocation;