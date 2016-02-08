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
            this.props.history.pushState(null, '/');
        }
    }
    confirmSale(){
        baseUtils.confirmSale(this.props.params.saleId);
        this.props.history.pushState(null, '/');
    }
    createSale(){
        baseUtils.createSale(this.state.sale, this.state.info);
        this.props.history.pushState(null, '/');
    }
    updateSale(){
        baseUtils.updateSale(this.props.params.saleId, this.state.sale, this.state.info);
        this.props.history.pushState(null, '/');
    }
    deleteSale(){
        baseUtils.deleteSale(this.props.params.saleId);
        this.props.history.pushState(null, '/');
    }
}
export default SaleBase;