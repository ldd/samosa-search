import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const Login = ({handler}) => (
    <div className='col-sm-12 col-md-3 col-md-offset-3'>
        <RaisedButton
            backgroundColor= '#3b5998'
            labelColor='white'
            style={{width:'100%'}}
            label='Log in with Facebook'
            onClick={handler}/>
    </div>
);
export default Login;