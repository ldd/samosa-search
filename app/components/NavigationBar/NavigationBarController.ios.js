'use strict';
import React, {Component, Navigator} from 'react-native';
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
            renderScene={(route, navigator) =>
                <SaleList
                    saleList={this.props.saleList}
                    filterBy={this.props.filterBy}
                    sortBy={this.props.sortBy}
                    name={route.name}
                    onBack={() => {
                      if (route.index > 0) {
                        navigator.pop();
                      }
                    }}
                />
            }
        />
    );
    }
}
//const styles = StyleSheet.create({
//    container:{
//        flex: 1
//    }
//});

export default NavigationBarController;