import React from 'react';
import SamosaSearchAPI from '../../api/samosaSearchAPI';
import {baseUtils} from '../../base/base';

class SaleListBase extends React.Component{
    constructor(props){
        super(props);
        //this.getDistances= this.getDistances.bind(this);
        //this.parseDistance = this.parseDistance.bind(this);
    }
    componentWillMount(){
        this.getDistances(this.props.saleList);
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.saleList !== this.props.saleList) {
            this.getDistances(nextProps.saleList);
        }
    }
    getDistances(saleList){
        if (saleList.length > 0) {
            SamosaSearchAPI.getDistances(saleList).then((results)=> this.setState({distances: results}));
        }
    }
    parseDistance(loc){
        let distance = this.state.distances && this.state.distances[loc] && this.state.distances[loc].distance;
        return distance < 1? distance*1000 + ' m': distance + ' km';
    }
    filter(caseName, saleList){
        switch(caseName){
            case 'isOwner':
                let uid = baseUtils.getUID();
                return saleList.filter(el => el.owner === uid);
            case 'isConfirmed':
                return saleList.filter(el => el.confirmed);
            case 'isUnconfirmed':
                return saleList.filter(el => !el.confirmed);
            default:
                return Array.from(saleList);
        }
    }
    applySort(caseName, saleList){
        switch(caseName){
            case 'time':
                return saleList.sort((el1, el2) => el1.time > el2.time);
            case 'loc':
                return saleList.sort((el1, el2) => el1.loc > el2.loc);
            default:
                return saleList;
        }
    }
}

export default SaleListBase;