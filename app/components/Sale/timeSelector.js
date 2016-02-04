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
            <MenuItem value={"0"} primaryText={AppConstants.times[0]} />
            <MenuItem value={"1"} primaryText={AppConstants.times[1]} />
            <MenuItem value={"2"} primaryText={AppConstants.times[2]} />
        </SelectField>
    </div>
);
export default TimeSelector;