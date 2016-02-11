import React, {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from '../../../node_modules/react-native-vector-icons/Ionicons';

const ApplicationBar = (props) => {
    return (
    <View style={styles.container}>
        <View style={styles.toolbar}>
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
            <View style={styles.toolbarTitleContainer}>
                <Text style={styles.toolbarTitle}>{props.name}</Text>
            </View>
            <View style={styles.toolbarButtonContainer}>
            {props.rightHandler &&
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