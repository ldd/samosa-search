'use strict';
import React, {
    Component,
    Navigator,
    View,
    Text,
    StyleSheet
} from 'react-native';
import SaleList from '../SaleList/SaleList';

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
                    goToSale={() => {
                        navigator.push({
                            name: 'Sale',
                            index: 1
                        })
                    }}
                />):(
                <View
                    name={route.name}
                    style={styles.wrapper}
                    goToSales={() => {
                        if(route.index > 0){
                            navigator.pop()
                        }
                    }}
                >
                    <Text>
                        (A sale component should go here)
                    </Text>
                </View>
                )
            )}
        />
    );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        margin: 10,
        padding: 10
    }
});

export default NavigationBarController;