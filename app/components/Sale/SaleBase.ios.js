import React from 'react';
import {baseUtils} from '../../base/base';

class SaleBase extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sale:{
                loc: 0,
                price: 0,
                time: 0,
                confirmed: false,
                owner: baseUtils.getUID()
            },
            info: ''
        };
    }
    setSale(id){
        let sale = this.props.saleList.find(sale => sale.key === id);
        if(sale){
            this.state.sale = sale;
        }
        //sale not found, we go to root route
        else{
            this.props.goToSaleList();
        }
    }
    confirmSale(){
        baseUtils.confirmSale(this.props.params.saleId);
        this.props.goToSaleList();
    }
    createSale(){
        baseUtils.createSale(this.state.sale, this.state.info);
        this.props.goToSaleList();
    }
    updateSale(){
        baseUtils.updateSale(this.props.params.saleId, this.state.sale, this.state.info);
        this.props.goToSaleList();
    }
    deleteSale(){
        baseUtils.deleteSale(this.props.params.saleId);
        this.props.goToSaleList();
    }
}
export default SaleBase;