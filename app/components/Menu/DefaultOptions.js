import React from 'react';
import AppConstants from '../../constants/constants';
import RaisedButton from 'material-ui/lib/raised-button';

const DefaultOptions = ({history}) => (
    <div className='col-sm-12 col-md-3'>
        <RaisedButton
            style={{width:'100%'}}
            label='See all sales'
            color='primary' variant='raised'
            onClick={() => history.pushState(null, '/list', {action:AppConstants.READ_SALES})}/>
    </div>
);
export default DefaultOptions;