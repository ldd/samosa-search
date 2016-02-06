import React, {
    StyleSheet,
    Text,
    ListView
} from 'react-native';
import AppConstants from '../../constants/constants';

function SaleList(props, state){
    let saleList = this.filter(props.filterBy,props.saleList);
    this.applySort(props.sortBy, saleList);
    let c = state.dataSource.cloneWithRows(saleList);
    return (
    <ListView
        dataSource={c}
        renderRow={(sale) => <Text>
        {`${AppConstants.locations[sale.loc]} (${AppConstants.times[sale.time]}) - ${this.parseDistance(sale.loc)}`}
        </Text>}
    />
    )
}
const styles = StyleSheet.create({
    saleList:{
        flex: 1
    }
});
export default SaleList;