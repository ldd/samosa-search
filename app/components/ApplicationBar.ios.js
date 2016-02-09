import React, {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ApplicationBar = (props) => {
    return (
    <View style={styles.container}>
        <View style={styles.toolbar}>
            {props.leftHandler &&
            <TouchableHighlight onPress={()=>props.leftHandler()}>
                <Icon
                    style={styles.toolbarButton}
                    name='ios-arrow-back'
                    size={14}
                    color='#fff'
                />
            </TouchableHighlight>
            }
            <Text style={styles.toolbarTitle}>{props.name}</Text>
            {props.rightHandler &&
            <TouchableHighlight onPress={()=>props.rightHandler()}>
                <Icon
                    style={styles.toolbarButton}
                    name='ios-plus-empty'
                    size={14}
                    color='#fff'
                />
            </TouchableHighlight>
            }
        </View>
    </View>
    );
};
const styles = StyleSheet.create({
    container:{
        //flex: 1
    },
    toolbar:{
        backgroundColor:'#007aff',
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
    }
});
export default ApplicationBar;