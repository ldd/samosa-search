import React from 'react';
import MapViewRender from './MapViewRender';
import SamosaSearchAPI from '../../api/samosaSearchAPI';

class SimpleMap extends React.Component {
    constructor(props){
        super(props);
        this.state={
            lat: SamosaSearchAPI.defaultLocation.lat,
            lon: SamosaSearchAPI.defaultLocation.lon,
            markers: []
        };
        //we make sure that either we update our state position
        // or we use the default position
        SamosaSearchAPI.getLocation((pos)=>{this.setState({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude
        })}, ()=>{this.setState({
            lat: SamosaSearchAPI.defaultLocation.lat,
            lon: SamosaSearchAPI.defaultLocation.lon
        })});
    }
    render(){
        return MapViewRender.call(this, this.props, this.state);
    }
}
export default SimpleMap;