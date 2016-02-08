/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    StyleSheet,
    Text,
    TabBarIOS,
    View
} from 'react-native';
import Icon from '../../../node_modules/react-native-vector-icons/Ionicons';
import MapView from './../MapView/MapView';
import NavigationBarController from './../NavigationBar/NavigationBarController';
import Options from './../Options/Options';

function MainRender(props, state){
        return (
            <View style={styles.mainContainer}>
                <TabBarIOS style={styles.tabBar}>
                    <Icon.TabBarItem
                        title='Map'
                        iconName='ios-location-outline'
                        selectedIconName='ios-location'
                        selected={state.selectedTab === 'map'}
                        onPress={() => {
                    this.setState({
                        selectedTab: 'map'
                    });
                }}>
                        <MapView
                            saleList={state.saleList}
                        />
                    </Icon.TabBarItem>
                    <Icon.TabBarItem
                        title='Sales'
                        iconName='ios-list-outline'
                        selectedIconName='ios-list'
                        selected={state.selectedTab === 'sales'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'sales'
                        });
                    }}>
                        <NavigationBarController
                            saleList={state.saleList}
                            filterBy={state.filterBy}
                            sortBy={state.sortBy}
                        />
                    </Icon.TabBarItem>
                    <Icon.TabBarItem
                        title='Settings'
                        iconName='ios-gear-outline'
                        selectedIconName='ios-gear'
                        selected={state.selectedTab === 'settings'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'settings'
                        });
                    }}>
                        <Options
                            filterBy={state.filterBy}
                            sortBy={state.sortBy}
                            changeFilter={(val)=>this.changeFilter(val)}
                            changeSort={(val)=>this.changeSort(val)}
                        />
                    </Icon.TabBarItem>
                    <Icon.TabBarItem
                        title='Log In'
                        iconName='log-in'
                        selectedIconName='log-in'
                        selected={state.selectedTab === 'login'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'login'
                        });
                    }}>
                        <View><Text>Settings</Text></View>
                    </Icon.TabBarItem>
                </TabBarIOS>
            </View>
        );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1
    },
    tabBar:{
    },
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'
    },
    toolbarButton:{
        width: 50,
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1
    },
    map: {
        flex: 1
    },

    tabContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabText: {
        color: 'white'
    }
});

export default MainRender;