import React from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

import {baseUtils} from '../../base/base';
import NavigationBar from './../NavigationBar/NavigationBarController';
import ApplicationBar from './../ApplicationBar/ApplicationBar';

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
                filterBy={this.state.filterBy}
                sortBy={this.state.sortBy}
                changeFilter={(val)=>this.changeFilter(val)}
                changeSort={(val)=>this.changeSort(val)}
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
}
export default MainRender;