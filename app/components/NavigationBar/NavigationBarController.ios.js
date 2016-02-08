'use strict';
import React, {
    Component,
    Navigator
} from 'react-native';
import SaleList from '../SaleList/SaleList';
import Sale from '../Sale/Sale';

class NavigationBarController extends Component{
    constructor(props){
        super(props);
    }
    render(){
    return (
        <Navigator
            initialRoute={{
                name: 'Sales',
                index: 0
            }}
            renderScene={(route, navigator) => (
                (route.index === 0) ? (
                <SaleList
                    saleList={this.props.saleList}
                    filterBy={this.props.filterBy}
                    sortBy={this.props.sortBy}
                    name={route.name}
                    goToSale={(id) => {
                        navigator.push({
                            name: 'Sale',
                            index: 1,
                            id: id
                        })
                    }}
                />):(
                <Sale
                    saleList={this.props.saleList}
                    params={{saleId: route.id}}
                    goToSaleList={() => {
                        navigator.pop();
                    }}
                />
                )
            )}
        />
    );
    }
}
export default NavigationBarController;