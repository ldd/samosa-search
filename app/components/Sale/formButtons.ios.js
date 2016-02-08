import React,{View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const FormButtons = (props) => {
    return (
    <View>
        <TouchableHighlight onPress={()=>props.createHandler()}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Create</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>props.updateHandler()}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Update</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>props.confimHandler()}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Confirm</Text>
        </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>props.deleteHandler()}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Delete</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>props.cancelHandler()}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
            </View>
        </TouchableHighlight>
    </View>
)};
var styles = StyleSheet.create({
    button: {
        height: 44,
        flexDirection: 'row',
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#007aff'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        alignSelf: 'center'
    }
});
export default FormButtons;