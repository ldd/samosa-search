import React from 'react';
import Select from '../../../node_modules/muicss/lib/react/select';
import SelectItem from '../../../node_modules/muicss/lib/react/select-item';
import AppConstants from '../../constants/constants';

const LocationSelector = (props) => (
    <div>
        <label>location</label>
        <Select isDisabled={!props.isEnabled}
                value={props.value}
                onChange={props.handler}>
            <SelectItem value={"0"}   label={AppConstants.locations[0]} />
            <SelectItem value={"1"}  label={AppConstants.locations[1]} />
            <SelectItem value={"2"} label={AppConstants.locations[2]} />
        </Select>
    </div>
);
export default LocationSelector;