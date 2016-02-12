import React, {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ApplicationBar = (props) => {
    return (
    <View style={styles.container}>
        <View style={styles.toolbar}>
            {/* left button (go back button) */}
            <View style={styles.toolbarButtonContainer}>
            {props.leftHandler &&
            <TouchableOpacity onPress={()=>props.leftHandler()}>
                    <Icon
                        style={styles.toolbarButton}
                        name='ios-arrow-back'
                        size={18}
                    />
            </TouchableOpacity>
            }
            </View>
            {/* center title */}
            <View style={styles.toolbarTitleContainer}>
                <Text style={styles.toolbarTitle}>{props.name}</Text>
            </View>
            {/* right button (add button) */}
            <View style={styles.toolbarButtonContainer}>
            {/* regardless of where the application bar is used,
                we always check if the user is logged in */}
            {props.rightHandler && props.loggedIn &&
            <TouchableOpacity onPress={()=>props.rightHandler()}>
                    <Icon
                        style={styles.toolbarButton}
                        name='ios-plus-outline'
                        size={18}
                    />
            </TouchableOpacity>
            }
            </View>
        </View>
    </View>
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#007aff'
    },
    toolbar:{
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1
    },
    toolbarButtonContainer:{
        //we make sure 2 buttons cover the rest of the row
        flex: 0.2
    },
    toolbarButton:{
        color:'#fff',
        textAlign: 'center'
    },
    toolbarTitleContainer:{
        flex: 0.6
    },
    toolbarTitle:{
        color:'#fff',
        fontWeight:'bold',
        textAlign: 'center'
    }
});
export default ApplicationBar;