'use strict';
import React from 'react-native';
let {
    SegmentedControlIOS,
    View,
    Text,
    StyleSheet
    } = React;
import AppConstants from '../../constants/constants';

function Options(props){
    return(
        <View style={styles.optionsWrapper}>
            <View style={styles.option}>
                <Text style={styles.title}>SORT BY</Text>
                <SegmentedControlIOS
                    selectedIndex={+props.sortBy}
                    onChange={(event)=>props.changeSort(''+event.nativeEvent.selectedSegmentIndex)}
                    values={[
                        AppConstants.sorters[0],
                        AppConstants.sorters[1],
                        AppConstants.sorters[2]]}
                />
            </View>
            <View style={styles.option}>
                <Text style={styles.title}>FILTER BY</Text>
                <SegmentedControlIOS
                    selectedIndex={+props.filterBy}
                    onChange={(event)=>props.changeFilter(''+event.nativeEvent.selectedSegmentIndex)}
                    values={[
                        AppConstants.filters[0],
                        AppConstants.filters[1],
                        AppConstants.filters[2],
                        AppConstants.filters[3]]}
                />
            </View>
        </View>
    )
}
var styles = StyleSheet.create({
    optionsWrapper: {
        margin: 10,
        padding: 10
    },
    options:{
        //padding: 10,
    },
    option:{
        //margin: 10,
        //padding: 10
    },
    title:{
        marginTop: 15,
        marginBottom: 10,
        color: 'rgba( 0, 0, 0, 0.3 )',
        fontSize: 12,
        fontWeight: 'bold'
    }
});
export default Options;
