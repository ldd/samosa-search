import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import NavigationExpandMore from 'material-ui/lib/svg-icons/navigation/expand-more';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconButton from 'material-ui/lib/icon-button';

import SaleList from './../SaleList/SaleList';
import Options from './../Options/Options';

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
                iconElementLeft={
                <IconButton
                    onClick={()=> this.props.closeHandler()}
                >
                    <NavigationClose/>
                </IconButton>}
                iconElementRight={
                <IconButton
                    onClick={()=> this.setState({optionsOpen: !this.state.optionsOpen})}
                >
                    <NavigationExpandMore/>
                </IconButton>}
            />
            {this.state.optionsOpen?
            <Options
                filterBy={this.props.filterBy}
                sortBy={this.props.sortBy}
                changeFilter={(value)=>this.props.changeFilter(value)}
                changeSort={(value)=>this.props.changeSort(value)}
            />:<SaleList
                filterBy={this.props.filterBy}
                sortBy={this.props.sortBy}
                closeHandler={this.props.closeHandler}
                saleList={this.props.saleList}
                history={this.props.history}
            />}
        </LeftNav>
        )
    }
}
export default NavigationBar;
