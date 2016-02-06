import React from 'react';
import {baseUtils} from '../../base/base';
import FloatingActionButton from '../../../node_modules/material-ui/lib/floating-action-button';
import ContentAdd from '../../../node_modules/material-ui/lib/svg-icons/content/add';
import NavigationBar from './../NavigationBar/NavigationBarController';
import ApplicationBar from './../ApplicationBar';

function MainRender(props, state){
    let isLoggedIn = baseUtils.isLoggedIn();
    let isRootRoute = props.location.pathname === '/';
    return(
        <div>
            <ApplicationBar
                isLoggedIn={isLoggedIn}
                history={props.history}
                handler={()=>this.setState({open: true})}
            />
            <NavigationBar
                saleList={state.saleList}
                history={props.history}
                open={state.open}
                closeHandler={()=> this.setState({open: false})}/>
            {/*add the sale list as a property to the child*/}
            {React.cloneElement(props.children, {saleList: state.saleList})}
            {isLoggedIn && isRootRoute && <FloatingActionButton
                style={{position: 'absolute', bottom:5, right:5}}
                onClick={()=>{
            this.setState({open: false});
            props.history.pushState(null, '/sale')
            }}>
                <ContentAdd />
            </FloatingActionButton>
            }
        </div>
    )
};

export default MainRender;
