import React from 'react';
import {base, baseUtils} from '../base/base';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import NavigationBar from './NavigationBar';
import ApplicationBar from './ApplicationBar';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open: false,
            saleList: []
        }
    }
    componentDidMount(){
        this.ref = base.bindToState('props', {
            context: this,
            asArray: true,
            state: 'saleList'
        });
    }
    componentWillUnmount(){
        base.removeBinding(this.ref);
    }
    render(){
        let isLoggedIn = baseUtils.isLoggedIn();
        let isRootRoute = this.props.location.pathname === '/';
        return(
        <div>
            <ApplicationBar
                isLoggedIn={isLoggedIn}
                history={this.props.history}
                handler={()=> this.setState({open: true})}
            />
            <NavigationBar
                saleList={this.state.saleList}
                history={this.props.history}
                open={this.state.open}
                closeHandler={()=> this.setState({open: false})}/>
            {/*add the sale list as a property to the child*/}
            {React.cloneElement(this.props.children, {saleList: this.state.saleList})}
            {isLoggedIn && isRootRoute && <FloatingActionButton
                style={{position: 'absolute', bottom:5, right:5}}
                onClick={()=>{
                this.setState({open: false});
                this.props.history.pushState(null, '/sale')
                }}>
                <ContentAdd />
            </FloatingActionButton>
            }
        </div>
        )
    }
}

export default Main;
