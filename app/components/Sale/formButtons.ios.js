import React,{View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const Button = ({handler, label}) => {
    return (
        <TouchableHighlight
            style={styles.buttonClicked}
            onPress={()=>handler()}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{label}</Text>
            </View>
        </TouchableHighlight>
    )
};

const FormButtons = (props) => {
    return (
    <View>
        {props.isCreating && <Button label={"Create"} handler={()=>props.createHandler()}/>}
        {props.isUpdating && <Button label={"Update"} handler={()=>props.updateHandler()}/>}
        {props.isConfirming && <Button label={"Confirm"} handler={()=>props.confirmHandler()}/>}
        {props.isUpdating && <Button label={"Delete"} handler={()=>props.deleteHandler()}/>}
        <Button label={"Cancel"} handler={()=>props.cancelHandler()}/>
    </View>
)};
//styles for a button in our form
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
    buttonClicked: {//we make sure that the TouchableHighlight has the same style as the button
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