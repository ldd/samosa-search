'use strict';
import React,{View,ScrollView,StyleSheet} from 'react-native';
import {baseUtils} from '../../base/base';
import LocationSelector from './locationSelector';
import PriceSelector from './priceSelector';
import TimeSelector from './timeSelector';
import InformationField from './InformationField';
import FormButtons from './formButtons';

function SaleRender(props,state){
        //these checks will be used to hide/show certain action buttons
        let isCreating = !props.params.saleId;
        let isOwner = state.sale.owner === baseUtils.getUID();
        let isLoggedIn = baseUtils.isLoggedIn();
        let isConfirmed = state.sale.confirmed;
        //we return a scrollable view because we expect the sale selectors and information field
        //to take more space than the height of the device
        return (
        <View style={styles.wrapper}><ScrollView><View style={styles.innerWrapper}>
            <LocationSelector
                isEnabled={isOwner || isCreating}
                value={state.sale.loc}
                handler={(value)=>this.setState((prevState)=> {
                    prevState.sale.loc = +value;
                    return {sale: prevState.sale};
                })}
            />
            <PriceSelector
                isEnabled={isOwner || isCreating}
                value={state.sale.price}
                handler={(value)=>this.setState((prevState)=> {
                    prevState.sale.price = +value;
                    return {sale: prevState.sale};
                })}
            />
            <TimeSelector
                isEnabled={isOwner || isCreating}
                value={state.sale.time}
                handler={(value)=>this.setState((prevState)=> {
                    prevState.sale.time = +value;
                    return {sale: prevState.sale};
                })}
            />
            <InformationField
                value={typeof(state.info) === 'string'? state.info : ''}
                disabled={!(isOwner || isCreating)}
                handler={(value)=> this.setState({info: value})}
            />
            <FormButtons
                isUpdating={isOwner && !isCreating}
                isConfirming={!isOwner && !isConfirmed && isLoggedIn}
                isCreating={isCreating}
                createHandler={()=> this.createSale()}
                updateHandler={()=> this.updateSale()}
                deleteHandler={()=> this.deleteSale()}
                confirmHandler={()=>this.confirmSale()}
                cancelHandler={()=> this.props.goToSaleList()}
            />
        </View></ScrollView></View>
        )
}
var styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    innerWrapper: {
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
});
export default SaleRender;