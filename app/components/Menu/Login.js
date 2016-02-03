import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import {base} from '../../base/base';

const Login = () => (
    <FlatButton
        backgroundColor= '#3b5998'
        labelColor='white'
        label='Log in with Facebook'
        onClick={() =>(base.authWithOAuthPopup('facebook', ()=> {history.pushState(null, '/')}))}/>
);
export default Login;