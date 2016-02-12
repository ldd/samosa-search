import React, {View, Text, TextInput, StyleSheet} from 'react-native';

const InformationField = ({value, disabled, handler}) => {
    return (
        <View>
            {/* we either show the text information of an existing sale
                or ask the user to provide the information of a new sale */}
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