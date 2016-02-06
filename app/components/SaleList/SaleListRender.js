import React from 'react';
import AppConstants from '../../constants/constants';
import List from '../../../node_modules/material-ui/lib/lists/list';
import ListItem from '../../../node_modules/material-ui/lib/lists/list-item';

function SaleList(props){
    let saleList = this.filter(props.filterBy,props.saleList);
    this.applySort(props.sortBy, saleList);
    return (
        <List>
            {saleList.map((sale, i) => <ListItem
                onTouchTap={()=>{
            props.history.pushState(null, `/sale/${sale.key}`);
            props.closeHandler();
            }}
                primaryText={`${AppConstants.locations[sale.loc]} (${AppConstants.times[sale.time]})`}
                secondaryText={this.parseDistance(sale.loc)}
                key={i}/>)}
        </List>
    )
}

export default SaleList;