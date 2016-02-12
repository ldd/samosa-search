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
                onChange={props.handler}
        >
        {AppConstants.locations.map((item,i) =>
            <MenuItem
                value={''+i}
                key={i}
                primaryText={item}
            />)
        }
        </SelectField>
    </div>
    )
};
export default LocationSelector;