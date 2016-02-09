'use strict';
import React, {
    Component,
    Navigator,
    View
} from 'react-native';
import SaleList from '../SaleList/SaleList';
import Sale from '../Sale/Sale';
import ApplicationBar from '../ApplicationBar';
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
                <View style={{flex: 1}}>
                    <ApplicationBar
                        name={route.name}
                        rightHandler={() => {
                            navigator.push({
                                name: 'Sale',
                                index: 1
                            })
                        }}
                    />
                    <SaleList
                        saleList={this.props.saleList}
                        filterBy={this.props.filterBy}
                        sortBy={this.props.sortBy}
                        goToSale={(id) => {
                            navigator.push({
                                name: 'Sale',
                                index: 1,
                                id: id
                            });
                        }}
                    />
                </View>):(
                <View style={{flex: 1}}>
                    <ApplicationBar
                        name={route.name}
                        leftHandler={() => {
                            navigator.pop();
                        }}
                    />
                    <Sale
                        saleList={this.props.saleList}
                        params={{saleId: route.id}}
                        goToSaleList={() => {
                            navigator.pop();
                        }}
                    />
                </View>
                )
            )}
        />
    );
    }
}
export default NavigationBarController;