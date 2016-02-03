import React from 'react';
import SamosaSearchAPI from '../../api/samosaSearchAPI';

class Salemap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            latitude: null,
            longitude: null
        };
        SamosaSearchAPI.getLocation((pos)=>{this.setState({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
        })}, ()=>{this.setState({
            latitude: SamosaSearchAPI.defaultLocation.lat,
            longitude: SamosaSearchAPI.defaultLocation.lon
        })});
    }
    getMapWidth(){
        return window && Math.round(window.innerWidth*.95) || 600;
    }
    render(){
        let lat = this.state.latitude;
        let long = this.state.longitude;
        let mapEl = <p>Loading Map...</p>;
        if (lat !== null && long !== null){
            let mapSrc = SamosaSearchAPI.getMapFromLocation(lat,
                long, this.props.saleList, this.getMapWidth(),300);
            mapEl = (<img width='100%' style={{marginTop: 5, marginBottom: 5,
            }} src={mapSrc} alt='Map'/>);
        }
        return(
            <div>
                {mapEl}
            </div>
        );
    }
}

export default Salemap;