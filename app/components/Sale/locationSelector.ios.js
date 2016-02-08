import React,{View, Text, PickerIOS, StyleSheet} from 'react-native';
let PickerItemIOS = PickerIOS.Item;
import AppConstants from '../../constants/constants';

const LocationSelector = (props) => {
    return(
    <View>
        <Text style={styles.textLabel}>LOCATION</Text>
        <PickerIOS
        style={styles.picker}
        itemStyle={styles.item}
        selectedValue={''+props.value}
        onValueChange={props.handler}
        >
        {AppConstants.locations.map((location,i) => (
            <PickerItemIOS
                itemStyle={{fontSize: 12}}
                key={''+i}
                value={''+i}
                label={location}
            />
        ))}
        </PickerIOS>
    </View>
    )
};
var styles = StyleSheet.create({
    textLabel:{
        color: 'rgba( 0, 0, 0, 0.3 )',
        fontSize: 12,
        fontWeight: 'bold'
    },
    picker:{},
    item:{
        fontSize: 16
        //marginTop: -55,
        //marginBottom: -55,
    }
});
export default LocationSelector;