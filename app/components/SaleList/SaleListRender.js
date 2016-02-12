import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import AppConstants from '../../constants/constants';

function SaleList(props){
    //filter and sort the saleList
    let saleList = this.filter(props.filterBy,props.saleList);
    this.applySort(props.sortBy, saleList);
    return (
        <List>
            {/*add a list item for every sale in the sale list*/}
            {saleList.map((sale, i) =>
                <ListItem
                    onTouchTap={()=>{
                        props.history.pushState(null, `/sale/${sale.key}`);
                        props.closeHandler();
                        }}
                    primaryText={`${AppConstants.locations[sale.loc]} (${AppConstants.times[sale.time]})`}
                    secondaryText={this.parseDistance(sale.loc)}
                    key={i}
                />)}
        </List>
    )
}
export default SaleList;