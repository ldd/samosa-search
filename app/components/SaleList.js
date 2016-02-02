import React from 'react';
import {base} from '../base/base';
import AppConstants from '../constants/constants';
import SamosaSearchAPI from '../api/samosaSearchAPI';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

class SaleList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : [],
            distances: null,
            action: props.location.query.action
        };
    }
    componentDidMount(){
        this.ref = base.bindToState('props', {
            context: this,
            asArray: true,
            state: 'list'
        });
    }
    componentWillUnmount(){
        base.removeBinding(this.ref);
    }
    componentDidUpdate(_, prevState) {
        if (this.state.list.length !== prevState.list.length){
            this.updateDistances();
        }
    }
    updateDistances(){
        SamosaSearchAPI.getDistances(this.state.list).then((results)=> this.setState({distances: results}));
    }
    parseDistance(loc){
        let distance = this.state.distances && this.state.distances[loc] && this.state.distances[loc].distance;
        return distance < 1? distance*1000 + ' m': distance + ' km';
    }
    render(){
        let query = {action: this.state.action};
        return (
        <List>
            {this.state.list.map((sale, i) => <ListItem
                onTouchTap={()=>this.props.history.pushState(null, `/sale/${sale.key}`, query)}
                primaryText={`${AppConstants.locations[sale.loc]} (${AppConstants.times[sale.time]})`}
                secondaryText={this.parseDistance(sale.loc)}
                key={i}/>)}
        </List>
        )
    }
}

export default SaleList;