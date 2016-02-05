/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    Component,
    StyleSheet,
    MapView,
    Text,
    TabBarIOS,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'map'
        }
    }
    changeTab(tabName) {
        this.setState({
            selectedTab: tabName
        });
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <TabBarIOS style={styles.tabBar}>
                    <Icon.TabBarItem
                        title='Map'
                        iconName='ios-location-outline'
                        selectedIconName='ios-location'
                        selected={this.state.selectedTab === 'map'}
                        onPress={() => {
                    this.setState({
                        selectedTab: 'map'
                    });
                }}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        />
                    </Icon.TabBarItem>
                    <Icon.TabBarItem
                        title='Sales'
                        iconName='ios-list-outline'
                        selectedIconName='ios-list'
                        selected={this.state.selectedTab === 'sales'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'sales'
                        });
                    }}>
                        <View><Text>Hello</Text></View>
                    </Icon.TabBarItem>
                    <Icon.TabBarItem
                        title='Settings'
                        iconName='ios-gear-outline'
                        selectedIconName='ios-gear'
                        selected={this.state.selectedTab === 'settings'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'settings'
                        });
                    }}>
                        <View><Text>Settings</Text></View>
                    </Icon.TabBarItem>
                    <Icon.TabBarItem
                        title='Log In'
                        iconName='log-in'
                        selectedIconName='log-in'
                        selected={this.state.selectedTab === 'login'}
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

export default Main;