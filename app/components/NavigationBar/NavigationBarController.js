import React from 'react';
import AppBar from '../../../node_modules/material-ui/lib/app-bar';
import LeftNav from '../../../node_modules/material-ui/lib/left-nav';
import SaleList from './SaleList';
import Divider from '../../../node_modules/material-ui/lib/divider';

import IconButton from '../../../node_modules/material-ui/lib/icon-button';
import NavigationExpandMore from '../../../node_modules/material-ui/lib/svg-icons/navigation/expand-more';
import Options from './Options';
import NavigationClose from '../../../node_modules/material-ui/lib/svg-icons/navigation/close';

class NavigationBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            optionsOpen: false
        }
    }
    render(){
        return(
        <LeftNav open={this.props.open}>
            <AppBar

                iconElementLeft={<IconButton
                onClick={()=> this.props.closeHandler()}
                ><NavigationClose/></IconButton>}
                iconElementRight={<IconButton
                onClick={()=> this.setState({optionsOpen: !this.state.optionsOpen})}
                ><NavigationExpandMore/></IconButton>}
            />
            {this.state.optionsOpen? <Options/>:<SaleList
                closeHandler={this.props.closeHandler}
                saleList={this.props.saleList}
                history={this.props.history}/>}
            <Divider />
        </LeftNav>
        )
    }
}

export default NavigationBar;
