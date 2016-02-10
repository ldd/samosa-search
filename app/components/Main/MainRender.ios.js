'use strict';
import React, {
    StyleSheet,
    TabBarIOS,
    View
} from 'react-native';
import FBSDKLogin from 'react-native-fbsdklogin';
let {FBSDKLoginButton} = FBSDKLogin;
import FBSDKCore from 'react-native-fbsdkcore';
let {FBSDKAccessToken} = FBSDKCore;

import Icon from 'react-native-vector-icons/Ionicons';
import MapView from './../MapView/MapView';
import NavigationBarController from './../NavigationBar/NavigationBarController';
import Options from './../Options/Options';
import {base} from '../../base/base';
import ApplicationBar from '../ApplicationBar';

function MainRender(props, state){
    let _loginHandler = () => {
        this.setState({loggedIn: true});
        alert('Logged in');
    };
    let _processToken = (token) => {
        base.authWithOAuthToken('facebook', token.tokenString,_loginHandler);
    };
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
                        <View style={{flex: 1}}>
                            <ApplicationBar name='Map'/>
                            <MapView
                                saleList={state.saleList}
                            />
                        </View>
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
                        <View style={{flex:1}}>
                            <ApplicationBar name='Options'/>
                            <Options
                                filterBy={state.filterBy}
                                sortBy={state.sortBy}
                                changeFilter={(val)=>this.changeFilter(val)}
                                changeSort={(val)=>this.changeSort(val)}
                            />
                        </View>
                    </Icon.TabBarItem>
                    <Icon.TabBarItem
                        title={state.loggedIn? 'Log Out':'Log In'}
                        iconName='log-in'
                        selectedIconName='log-in'
                        selected={state.selectedTab === 'login'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'login'
                        });
                    }}>


                    <View>
                        <ApplicationBar name='Authentication'/>
                        <View style={styles.facebookButtonContainer}>
                        <FBSDKLoginButton
                            onLoginFinished={(error, result) => {
                                if (error) {
                                  alert('Error logging in');
                                } else {
                                  if (result.isCancelled) {
                                    alert('Login cancelled');
                                  } else {
                                    FBSDKAccessToken.getCurrentAccessToken(_processToken);
                                  }
                                }
                              }}
                            onLogoutFinished={() => {
                                this.setState({loggedIn: false});
                                base.unauth().then(alert('Logged out.'));
                            }}
                            readPermissions={[]}
                            publishPermissions={[]}/>
                            </View>
                        </View>
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
        flex: 1
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
    },
    facebookButtonContainer:{
        alignSelf: 'center',
        marginTop: 10
    }
});

export default MainRender;