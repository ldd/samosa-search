import React from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppConstants from '../../constants/constants';

const LocationSelector = (props) => {
    return(
    <div>
        <SelectField disabled={!props.isEnabled}
                floatingLabelText='location'
                value={props.value}
                onChange={props.handler}>
            <MenuItem value={"0"}   primaryText={AppConstants.locations[0]} />
            <MenuItem value={"1"}  primaryText={AppConstants.locations[1]} />
            <MenuItem value={"2"} primaryText={AppConstants.locations[2]} />
        </SelectField>
    </div>
    )
}
export default LocationSelector;