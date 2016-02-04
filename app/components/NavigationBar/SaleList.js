import React from 'react';
import AppConstants from '../../constants/constants';
import SamosaSearchAPI from '../../api/samosaSearchAPI';
import List from '../../../node_modules/material-ui/lib/lists/list';
import ListItem from '../../../node_modules/material-ui/lib/lists/list-item';
import {baseUtils} from '../../base/base';

class SaleList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            distances: null
        };
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
    render(){
        let saleList = this.filter(this.props.filterBy,this.props.saleList);
        this.applySort(this.props.sortBy, saleList);
        return (
        <List>
            {saleList.map((sale, i) => <ListItem
                onTouchTap={()=>{
                this.props.history.pushState(null, `/sale/${sale.key}`);
                this.props.closeHandler();
                }}
                primaryText={`${AppConstants.locations[sale.loc]} (${AppConstants.times[sale.time]})`}
                secondaryText={this.parseDistance(sale.loc)}
                key={i}/>)}
        </List>
        )
    }
}

export default SaleList;