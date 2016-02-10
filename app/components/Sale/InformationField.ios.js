import React, {View, Text, TextInput, StyleSheet} from 'react-native';

const InformationField = ({defaultValue, value, disabled, handler}) => {
    return (
        <View>
            <Text style={styles.textLabel}>
                INFORMATION
            </Text>
            {disabled ?
                <Text style={styles.textInfo}>
                    {value}
                </Text>:
                <TextInput
                    style={styles.textArea}
                    multiline={true}
                    onChangeText={(text) => handler(text)}
                    value={value}
                    editable={!disabled}
                />
            }
        </View>
    )
};
var styles = StyleSheet.create({
    textLabel:{
        color: 'rgba( 0, 0, 0, 0.3 )',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 10
    },
    textArea:{
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        marginBottom: 40
    },
    textInfo:{
        marginTop: 10,
        marginBottom: 40
    }
});
export default InformationField;