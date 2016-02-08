import React from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppConstants from '../../constants/constants';

const TimeSelector = (props) => (
    <div>
        <SelectField disabled={!props.isEnabled}
                     floatingLabelText='time'
                     value={props.value}
                     onChange={props.handler}>
            {AppConstants.times.map((item,i) => <MenuItem
                value={''+i}
                primaryText={item}/>)
            }
        </SelectField>
    </div>
);
export default TimeSelector;