import React from 'react';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

function Options(props){
    return(
        <List>
            <List subheader='sort by'>
                <ListItem disabled={true}>
                    <RadioButtonGroup
                        name='shipSpeed'
                        defaultSelected={props.sortBy}
                        onChange={(e, value)=> props.changeSort(value)}
                    >
                        <RadioButton
                            value='none'
                            label='(none)'
                            style={{marginBottom:16}}
                        />
                        <RadioButton
                            value='loc'
                            label='location'
                            style={{marginBottom:16}}
                        />
                        <RadioButton
                            value='time'
                            label='time'
                            style={{marginBottom:16}}
                        />
                    </RadioButtonGroup>
                </ListItem>
            </List>
            <List subheader='filter by'>
                <ListItem disabled={true}>
                    <RadioButtonGroup
                        name='shipSpeed'
                        defaultSelected={props.filterBy}
                        onChange={(e, value)=> props.changeFilter(value)}
                    >
                        <RadioButton
                            value='all'
                            label='show all'
                            style={{marginBottom:16}}
                        />
                        <RadioButton
                            value='isOwner'
                            label='show owned'
                            style={{marginBottom:16}}
                        />
                        <RadioButton
                            value='isConfirmed'
                            label='show confirmed'
                            style={{marginBottom:16}}
                        />
                        <RadioButton
                            value='isUnconfirmed'
                            label='show unconfirmed'
                            style={{marginBottom:16}}
                        />
                    </RadioButtonGroup>
                </ListItem>
            </List>
        </List>
    )
}
export default Options;
