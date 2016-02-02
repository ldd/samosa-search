import React from 'react';
import AppConstants from '../../constants/constants';
import RaisedButton from 'material-ui/lib/raised-button';

const LoggedUserOptions = ({history}) => (
    <div>
        <div className='col-sm-12 col-md-3'>
            <RaisedButton
                color='primary'
                style={{width:'100%'}}
                disabled={true}
                label='Confirm a sale'
                onClick={() => history.push('/unconfirmed')}/>
        </div>
        <div className='col-sm-12 col-md-3'>
            <RaisedButton
                color='primary'
                style={{width:'100%'}}
                label='Create a sale'
                onClick={() => history.pushState(null, '/sale', {action:AppConstants.CREATE_SALE})}/>
        </div>
        <div className='col-sm-12 col-md-3'>
            <RaisedButton
                color='primary'
                style={{width:'100%'}}
                label='Edit sales'
                onClick={() => history.pushState(null, '/list', {action:AppConstants.UPDATE_SALE})}/>
        </div>
    </div>
);
export default LoggedUserOptions;