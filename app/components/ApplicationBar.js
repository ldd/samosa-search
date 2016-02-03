import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import {base} from '../base/base';
import AppBar from 'material-ui/lib/app-bar';

const ApplicationBar = ({isLoggedIn, handler, history}) => {
    let logOutComponent = (<FlatButton label='logout'
                                       onClick={() => {base.unauth().then(history.pushState(null, '/'))}} />);
    let logInComponent = (<FlatButton
        backgroundColor= '#3b5998'
        labelColor='white'
        label='Log in with Facebook'
        onClick={() =>(base.authWithOAuthPopup('facebook', ()=> {history.pushState(null, '/')}))}/>);

    return (
    <AppBar
        onLeftIconButtonTouchTap={handler}
        iconElementRight={isLoggedIn? logOutComponent : logInComponent}
    />
    );
};
export default ApplicationBar;