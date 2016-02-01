import React from 'react';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import {base, baseUtils} from '../base/base';

class Main extends React.Component{
    render(){
        let isLoggedIn = baseUtils.isLoggedIn();
        let history = this.props.history;
        return(
            <div className='main-container'>
                <Appbar>
                    <div className='mui--appbar-line-height mui--appbar-height'>
                        <Button
                            style={{left: 5}}
                            variant='raised' color='primary'
                            onClick={() => history.pushState(null, '/')}>
                            Home
                        </Button>
                        {
                            isLoggedIn &&
                            <Button
                                variant='raised' color='primary'
                                onClick={() => {
                          base.unauth().then(history.pushState(null, '/'))
                      }}>
                                Logout
                            </Button>
                        }
                    </div>
                </Appbar>
                <div className='container'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;
