import React,{View, Text, PickerIOS, StyleSheet} from 'react-native';
let PickerItemIOS = PickerIOS.Item;
import AppConstants from '../../constants/constants';

const LocationSelector = (props) => {
    return(
        <View>
            <Text style={styles.textLabel}>TIME</Text>
            {props.isEnabled?
            <PickerIOS
                style={styles.picker}
                itemStyle={styles.item}
                selectedValue={''+props.value}
                onValueChange={props.handler}
            >
                {AppConstants.times.map((time,i) => (
                    <PickerItemIOS
                        itemStyle={{fontSize: 12}}
                        key={''+i}
                        value={''+i}
                        label={time}
                    />
                ))}
            </PickerIOS>:
                <Text style={styles.disabledItem}>
                    {AppConstants.times[props.value]}
                </Text>
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
    picker:{},
    item:{
        fontSize: 16
    },
    disabledItem:{
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    }
});
export default LocationSelector;