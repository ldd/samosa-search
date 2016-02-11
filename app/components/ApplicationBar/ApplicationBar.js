import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import AppBar from 'material-ui/lib/app-bar';

import {base} from '../../base/base';

const ApplicationBar = ({isLoggedIn, handler, history}) => {
    //log out button that deauthorizes you, and pushes you to the root route
    let logOutComponent = (<FlatButton
        label='logout'
        onClick={() => {base.unauth().then(history.pushState(null, '/'))}}
    />);
    //log in button that authorizes you, and pushes you to the root route
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