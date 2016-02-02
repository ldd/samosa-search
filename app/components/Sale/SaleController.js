import React from 'react';
import {base, baseUtils} from '../../base/base';
import AppConstants from '../../constants/constants';
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
            this.saleRef = base.bindToState(`props/${this.props.params.saleId}`, {
                context: this,
                state: 'sale'
            });
            this.infoRef = base.bindToState(`info/${this.props.params.saleId}`, {
                context: this,
                state: 'info'
            });
        }
    }
    componentWillUnmount(){
        if(this.props.params.saleId) {
            base.removeBinding(this.saleRef);
            base.removeBinding(this.infoRef);
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
    render(){
        let action = this.props.location.query.action;
        let isCreating = action === AppConstants.CREATE_SALE;
        let isOwner = this.state.sale.owner === baseUtils.getUID();
        let isUpdating = action === AppConstants.UPDATE_SALE;
        let isEnabled = isCreating || isUpdating;
        let nextPath = isCreating? '/': '/list';
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
                isEnabled={isEnabled}/>
            <PriceSelector/>
            <TimeSelector
                handler={(e,i,value) => this.setState((prevState)=> {
                    prevState.sale.time = +value;
                    return (
                        {sale: prevState.sale}
                    )
                })}
                value={''+this.state.sale.time}
                isEnabled={isEnabled}/>
            <label>information</label>
            <TextField
                defaultValue={this.state.info}
                value={typeof(this.state.info) === 'string'? this.state.info : ''}
                fullWidth={true}
                disabled={!isEnabled}
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
                cancelHandler={()=> this.props.history.pushState(null,nextPath)}
            />
            {(isUpdating && !isOwner) && <Notification message='You cannot edit this sale'/>}
        </Card>
        )
    }
}
export default Sale;