import React,{View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const FormButtons = (props) => {
    return (
    <View>
        {props.isCreating &&
        <TouchableHighlight
            style={styles.buttonClicked}
            onPress={()=>props.createHandler()}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Create</Text>
            </View>
        </TouchableHighlight>}
        {props.isUpdating &&
        <TouchableHighlight
            style={styles.buttonClicked}
            onPress={()=>props.updateHandler()}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Update</Text>
            </View>
        </TouchableHighlight>}
        {props.isConfirming &&
        <TouchableHighlight
            style={styles.buttonClicked}
            onPress={()=>props.confirmHandler()}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Confirm</Text>
        </View>
        </TouchableHighlight>}
        {props.isUpdating &&
        <TouchableHighlight
            style={styles.buttonClicked}
            onPress={()=>props.deleteHandler()}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Delete</Text>
            </View>
        </TouchableHighlight>}
        <TouchableHighlight
            style={styles.buttonClicked}
            onPress={()=>props.cancelHandler()}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
            </View>
        </TouchableHighlight>
    </View>
)};
var styles = StyleSheet.create({
    button: {
        height: 44,
        borderRadius: 8,
        marginBottom: 10,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#007aff'
    },
    buttonClicked: {
        height: 44,
        borderRadius: 8,
        marginBottom: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        alignSelf: 'center'
    }
});
export default FormButtons;