import React from 'react';
import {baseUtils} from '../../base/base';

import LocationSelector from './locationSelector';
import PriceSelector from './priceSelector';
import TimeSelector from './timeSelector';
import InformationField from './informationField';
import FormButtons from './formButtons';
import Notification from '../Notification';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';

function SaleRender(props,state){
        let isCreating = !props.params.saleId;
        let isOwner = state.sale.owner === baseUtils.getUID();
        let isLoggedIn = baseUtils.isLoggedIn();
        let isConfirmed = state.sale.confirmed;
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
                        value={''+state.sale.loc}
                        isEnabled={isOwner || isCreating}
                    />
                    <PriceSelector/>
                    <TimeSelector
                        handler={(e,i,value) => this.setState((prevState)=> {
                        prevState.sale.time = +value;
                        return (
                            {sale: prevState.sale}
                        )
                    })}
                        value={''+state.sale.time}
                        isEnabled={isOwner || isCreating}
                    />
                    <InformationField
                        defaultValue={state.info}
                        value={typeof(state.info) === 'string'? state.info : ''}
                        disabled={!(isOwner || isCreating)}
                        handler={(el)=> this.setState({info: el.target.value})}
                    />
                </CardText>
                <FormButtons
                    isUpdating={isOwner && !isCreating}
                    isConfirming={!isOwner && !isConfirmed && isLoggedIn}
                    isCreating={isCreating}
                    createHandler={()=> this.createSale()}
                    updateHandler={()=> this.updateSale()}
                    deleteHandler={()=> this.deleteSale()}
                    confirmHandler={()=>this.confirmSale()}
                    cancelHandler={()=> props.history.pushState(null,'/')}
                />
                {(!isCreating && !isOwner) && <Notification initialState={true} message='You cannot edit this sale'/>}
            </Card>
        )
}
export default SaleRender;