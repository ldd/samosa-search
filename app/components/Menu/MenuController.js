import React from 'react';
import {base, baseUtils} from '../../base/base';
import Login from './Login';
import LoggedUserOptions from './LoggedUserOptions';
import DefaultOptions from './DefaultOptions';
import SaleMap from './SaleMap';

class Menu extends React.Component{
    render(){
        let isLoggedIn = baseUtils.isLoggedIn();
        let history = this.props.history;
        return(
            <div  className='mui--text-center' style={{maxWidth: '100%'}}>
                <SaleMap />
                {!isLoggedIn && <Login handler={() =>(base.authWithOAuthPopup('facebook', ()=> {history.pushState(null, '/')}))}/>}
                <DefaultOptions history={history}/>
                {isLoggedIn && <LoggedUserOptions history={history}/>}

            </div>
        )
    }
}

export default Menu;