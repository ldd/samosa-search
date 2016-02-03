import React from 'react';
import {base, baseUtils} from '../../base/base';
import utils from '../../utils/utils';

import LocationSelector from './locationSelector';
import PriceSelector from './priceSelector';
import TimeSelector from './timeSelector';
import FormButtons from './formButtons';
import Notification from '../Notification';
import TextField from 'material-ui/lib/text-field';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';

class Sale extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sale:{
                loc: 0,
                price: 0,
                time: 0,
                owner: baseUtils.getUID()
            },
            info: ''
        };
    }
    componentDidMount(){
        if(this.props.params.saleId){
            this.infoRef = base.bindToState(`info/${this.props.params.saleId}`, {
                context: this,
                state: 'info'
            });
            //we set the initial state, passed down from our parent
            this.setSale(this.props.params.saleId);
        }
    }
    componentWillUnmount(){
        if(this.props.params.saleId) {
            base.removeBinding(this.infoRef);
        }
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
    createSale(){
        let id = utils.generateId();
        base.post(`props/${id}`, {
            data: this.state.sale
        });
        base.post(`info/${id}`, {
            data: this.state.info
        });
        this.props.history.pushState(null, '/');
    }
    updateSale(){
        base.post(`props/${this.props.params.saleId}`, {
            data: this.state.sale
        });
        base.post(`info`, {
            data: { [this.props.params.saleId]: this.state.info}
        });
        this.props.history.pushState(null, '/');
    }
    deleteSale(){
        base.post(`props/${this.props.params.saleId}`, {
            data: null
        });
        base.post(`info/${this.props.params.saleId}`, {
            data: null
        });
        this.props.history.pushState(null, '/');
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.params.saleId !== this.props.params.saleId){
            base.removeBinding(this.infoRef);
            if(nextProps.params.saleId){
                this.infoRef = base.bindToState(`info/${nextProps.params.saleId}`, {
                    context: this,
                    state: 'info'
                });
            }
            this.setSale(nextProps.params.saleId);
        }
    }
    render(){
        let isCreating = !this.props.params.saleId;
        let isOwner = this.state.sale.owner === baseUtils.getUID();
        let isUpdating = !isCreating;
        return (
        <Card>
            <CardText>
            <LocationSelector
                handler={(e,i,value) => this.setState((prevState)=> {
                    prevState.sale.loc = +value;
                    return (
                        {sale: prevState.sale}
                    )
                })}
                value={''+this.state.sale.loc}
                isEnabled={isOwner || isCreating}/>
            <PriceSelector/>
            <TimeSelector
                handler={(e,i,value) => this.setState((prevState)=> {
                    prevState.sale.time = +value;
                    return (
                        {sale: prevState.sale}
                    )
                })}
                value={''+this.state.sale.time}
                isEnabled={isOwner || isCreating}/>
            <label>information</label>
            <TextField
                defaultValue={this.state.info}
                value={typeof(this.state.info) === 'string'? this.state.info : ''}
                fullWidth={true}
                disabled={!(isOwner || isCreating)}
                onChange={(el)=> this.setState({info: el.target.value})}
                rows={2}
                rowsMax={4}
            />
            </CardText>
            <FormButtons
                isUpdating={isUpdating && isOwner}
                isCreating={isCreating}
                createHandler={()=> this.createSale()}
                updateHandler={()=> this.updateSale()}
                deleteHandler={()=> this.deleteSale()}
                cancelHandler={()=> this.props.history.pushState(null,'/')}
            />
            {(isUpdating && !isOwner) && <Notification initialState={true} message='You cannot edit this sale'/>}
        </Card>
        )
    }
}
export default Sale;