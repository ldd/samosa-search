import React from 'react';
import SamosaSearchAPI from '../../api/samosaSearchAPI';
import {base} from '../../base/base';

class Salemap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            latitude: null,
            longitude: null,
            saleList: []
        };
        SamosaSearchAPI.getLocation((pos)=>{this.setState({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
        })}, ()=>{this.setState({
            latitude: SamosaSearchAPI.defaultLocation.lat,
            longitude: SamosaSearchAPI.defaultLocation.lon
        })});
    }
    componentDidMount(){
        this.ref = base.bindToState('props', {
            context: this,
            asArray: true,
            state: 'saleList'
        });
    }
    componentWillUnmount(){
        base.removeBinding(this.ref);
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
                long, this.state.saleList, this.getMapWidth());
            mapEl = <img width='90%' style={{marginTop: 5, marginBottom: 5, width: '100%'}} src={mapSrc} alt='Map'/>
        }
        return(
            <div className='col-sm-12 col-md-12'>
                {mapEl}
            </div>
        );
    }
}

export default Salemap;