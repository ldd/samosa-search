import React from 'react';
import {base, baseUtils} from '../base/base';
import AppBar from 'material-ui/lib/app-bar';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';

class Main extends React.Component{
    render(){
        let isLoggedIn = baseUtils.isLoggedIn();
        let history = this.props.history;
        return(
        <div>
            <AppBar
                iconElementLeft={<IconButton onClick={()=> history.pushState(null, '/')}>
                <ActionHome /></IconButton>}
                iconElementRight={<FlatButton label='logout'
                    onClick={() => {base.unauth().then(history.pushState(null, '/'))}} />}
                iconStyleRight={isLoggedIn? {} : {display: 'none'}}
            />
            <div>
                {this.props.children}
            </div>
            </div>
        )
    }
}

export default Main;
