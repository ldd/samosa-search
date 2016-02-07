'use strict';
var React = require('react-native');
var {
    SegmentedControlIOS,
    View,
    Text,
    StyleSheet
    } = React;

function Options(props,state){
    return(
        <View style={styles.optionsWrapper}>
            <View style={styles.option}>
                <Text style={styles.title}>SORT BY</Text>
                <SegmentedControlIOS values={['(none)', 'location', 'time']} />
            </View>
            <View style={styles.option}>
                <Text style={styles.title}>FILTER BY</Text>
                <SegmentedControlIOS values={[
                'all', 'owned', 'confirmed', 'unconfirmed'
                ]} />
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
