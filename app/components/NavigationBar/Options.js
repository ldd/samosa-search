import React from 'react';

import List from '../../../node_modules/material-ui/lib/lists/list';
import ListItem from '../../../node_modules/material-ui/lib/lists/list-item';
import Toggle from '../../../node_modules/material-ui/lib/toggle';
import RadioButton from '../../../node_modules/material-ui/lib/radio-button';
import RadioButtonGroup from '../../../node_modules/material-ui/lib/radio-button-group';

class Options extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <List subheader='Sort&Filter Options'>
            <ListItem primaryText='Sort' rightToggle={<Toggle />} />
            <ListItem disabled={true}>
                <RadioButtonGroup name='shipSpeed' defaultSelected='jekyll'>
                    <RadioButton
                        value='closest'
                        label='closest'
                        style={{marginBottom:16}}
                    />
                    <RadioButton
                        value='soonest'
                        label='soonest'
                        style={{marginBottom:16}}
                    />
                </RadioButtonGroup>
            </ListItem>
            <ListItem primaryText='Filter' rightToggle={<Toggle />} />
            <ListItem disabled={true}>
                <RadioButtonGroup name='shipSpeed' defaultSelected='jekyll'>
                    <RadioButton
                        value='show confirmed'
                        label='show confirmed'
                        style={{marginBottom:16}}
                    />
                    <RadioButton
                        value='show all'
                        label='show all'
                        style={{marginBottom:16}}
                    />
                    <RadioButton
                        value='show unconfirmed'
                        label='show unconfirmed'
                        style={{marginBottom:16}}
                    />
                </RadioButtonGroup>
            </ListItem>
        </List>
        )
    }
}

export default Options;
