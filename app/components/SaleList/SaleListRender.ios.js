import React, {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight
} from 'react-native';
import AppConstants from '../../constants/constants';

function SaleList(props, state){
    let saleList = this.filter(props.filterBy,props.saleList);
    this.applySort(props.sortBy, saleList);
    let c = state.dataSource.cloneWithRows(saleList);
    return (
    <ListView
        dataSource={c}
        renderRow={(sale) => (
        <View style={ styles.saleWrapper }>
        <TouchableHighlight onPress={()=> props.goToSale()}>
            <View style={ styles.sale }>
                <Text style={ styles.saleLocation }>
                    {AppConstants.locations[sale.loc]}
                </Text>
                <View style={ styles.saleInfo }>
                    <Text style={ styles.saleInfoHeader }>
                        TIME
                    </Text>
                    <Text style={ [styles.saleInfoValue] }>
                        {AppConstants.times[sale.time]}
                    </Text>
                </View>
                <View style={ styles.saleInfo }>
                    <Text style={ styles.saleInfoHeader }>
                        PRICE
                    </Text>
                    <Text style={ [styles.saleInfoValue, styles.regularPrice] }>
                        $
                    </Text>
                </View>
                <View style={ styles.saleInfo }>
                    <Text style={ styles.saleInfoHeader }>
                        DISTANCE
                    </Text>
                    <Text style={ styles.saleInfoValue }>
                        {this.parseDistance(sale.loc)}
                    </Text>
                </View>
            </View>
            </TouchableHighlight>
        </View>
    )}
    />
    )
}
var styles = StyleSheet.create({
    saleWrapper: {
        flex: 1,
        margin: 10,
        borderRadius: 3,
        overflow: 'hidden'
    },
    sale: {
        backgroundColor: '#fff',
        borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
        borderBottomWidth: 1,
        padding: 10,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    saleLocation: {
        fontSize: 16,
        flex: 1,
        marginRight: 5,
        flexDirection: 'column'
    },
    saleInfo: {
        flex: 0.25,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
    },
    saleInfoHeader: {
        color: 'rgba( 0, 0, 0, 0.3 )',
        fontSize: 10,
        fontWeight: 'bold'
    },
    saleInfoValue: {
        color: 'rgba( 0, 0, 0, 0.6 )',
        fontSize: 16
    },
    regularPrice: {
        color: '#93C26D'
    },
    highPrice: {
        color: '#DD4B39'
    }
});
export default SaleList;