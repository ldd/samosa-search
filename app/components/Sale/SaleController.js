import React from 'react';
import Form from 'muicss/lib/react/form';
import TextareaInput from 'muicss/lib/react/textarea-input';
import {base} from '../../base/base';
import AppConstants from '../../constants/constants';

import LocationSelector from './locationSelector';
import PriceSelector from './priceSelector';
import TimeSelector from './timeSelector';
import FormButtons from './formButtons';

class Sale extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sale:{
                loc: 0,
                price: 0,
                time: 0
            },
            info: ""
        };
    }
    componentDidMount(){
        if(this.props.params.saleId){
            this.ref = base.bindToState(`props/${this.props.params.saleId}`, {
                context: this,
                state: 'sale'
            });
        }
    }
    componentWillUnmount(){
        if(this.props.params.saleId) {
            base.removeBinding(this.ref);
        }
    }
    createSale(){
        let history = this.props.history;
        base.push('props', {
            data: this.state.sale,
            then(){
                history.pushState(null, '/');
            }
        });
    }
    updateSale(){
        let history = this.props.history;
        base.post(`props/${this.props.params.saleId}`, {
            data: this.state.sale,
            then(){
                history.pushState(null, '/');
            }
        });
    }
    deleteSale(){
        let history = this.props.history;
        base.post(`props/${this.props.params.saleId}`, {
            data: null,
            then(){
                history.pushState(null, '/');
            }
        });
    }
    render(){
        let action = this.props.location.query.action;
        let isCreating = action === AppConstants.CREATE_SALE;
        let isUpdating = action === AppConstants.UPDATE_SALE;
        let isEnabled = isCreating || isUpdating;
        let nextPath = isCreating? '/': '/list'
        return (
        <Form>
            <LocationSelector
                handler={(value) => this.setState((prevState)=> {
                    prevState.sale.loc = +value;
                    return (
                        {sale: prevState.sale}
                    )
                })}
                value={""+this.state.sale.loc}
                isEnabled={isEnabled}/>
            <PriceSelector/>
            <TimeSelector
                handler={(value) => this.setState((prevState)=> {
                    prevState.sale.time = +value;
                    return (
                        {sale: prevState.sale}
                    )
                })}
                value={""+this.state.sale.time}
                isEnabled={isEnabled}/>

            <div className="mui--no-user-select">
                <label>information</label>
            <TextareaInput
                value={this.state.info}
                disabled={isEnabled? "" : "disabled"}
                onChange={(el)=> this.setState({info: el.target.value})}
            />
            </div>

            <FormButtons
                isUpdating={isUpdating}
                isCreating={isCreating}
                createHandler={()=> this.createSale()}
                updateHandler={()=> this.updateSale()}
                deleteHandler={()=> this.deleteSale()}
                cancelHandler={()=> this.props.history.pushState(null,nextPath)}
            />
        </Form>
        )
    }
}
export default Sale;