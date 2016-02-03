import React from 'react';
import AppConstants from '../../constants/constants';
import SamosaSearchAPI from '../../api/samosaSearchAPI';
import List from '../../../node_modules/material-ui/lib/lists/list';
import ListItem from '../../../node_modules/material-ui/lib/lists/list-item';

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
    //shouldComponentUpdate(_,nextState){
    //    return nextState.distances !== this.state.distances;
    //}
    getDistances(saleList){
        if (saleList.length > 0) {
            SamosaSearchAPI.getDistances(saleList).then((results)=> this.setState({distances: results}));
        }
    }
    parseDistance(loc){
        let distance = this.state.distances && this.state.distances[loc] && this.state.distances[loc].distance;
        return distance < 1? distance*1000 + ' m': distance + ' km';
    }
    render(){
        return (
        <List>
            {this.props.saleList.map((sale, i) => <ListItem
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