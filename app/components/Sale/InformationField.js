import React from 'react';
import TextField from 'material-ui/lib/text-field';

const InformationField = ({defaultValue, value, disabled, handler}) => (
    <div>
        <label>information</label>
        <TextField
            defaultValue={defaultValue}
            value={value}
            fullWidth={true}
            disabled={disabled}
            onChange={handler}
            rows={2}
            rowsMax={4}
        />
    </div>
);
export default InformationField;