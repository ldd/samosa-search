import React from 'react';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

import AppConstants from '../../constants/constants';
function Options(props){
    return(
        <List>
            <List subheader='sort by'>
                <ListItem disabled={true}>
                    <RadioButtonGroup
                        name='sort'
                        defaultSelected={props.sortBy}
                        onChange={(e, value)=> props.changeSort(value)}
                    >
                        <RadioButton
                            value='0'
                            label={AppConstants.sorters[0]}
                            style={{marginBottom:16}}
                        />
                        <RadioButton
                            value='1'
                            label={AppConstants.sorters[1]}
                            style={{marginBottom:16}}
                        />
                        <RadioButton
                            value='2'
                            label={AppConstants.sorters[2]}
                            style={{marginBottom:16}}
                        />
                    </RadioButtonGroup>
                </ListItem>
            </List>
            <List subheader='filter by'>
                <ListItem disabled={true}>
                    <RadioButtonGroup
                        name='filter'
                        defaultSelected={props.filterBy}
                        onChange={(e, value)=> props.changeFilter(value)}
                    >
                        <RadioButton
                            value='0'
                            label={AppConstants.filters[0]}
                            style={{marginBottom:16}}
                        />
                        <RadioButton
                            value='1'
                            label={AppConstants.filters[1]}
                            style={{marginBottom:16}}
                        />
                        <RadioButton
                            value='2'
                            label={AppConstants.filters[2]}
                            style={{marginBottom:16}}
                        />
                        <RadioButton
                            value='3'
                            label={AppConstants.filters[3]}
                            style={{marginBottom:16}}
                        />
                    </RadioButtonGroup>
                </ListItem>
            </List>
        </List>
    )
}
export default Options;
