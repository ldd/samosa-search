import React from 'react';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

import AppConstants from '../../constants/constants';

const PriceSelector = () => (
    <div>
        <label>price</label>
        <RadioButtonGroup name='price' defaultSelected={AppConstants.prices[0]}>
            <RadioButton
                disabled={true}
                checked={true}
                value={AppConstants.prices[0]}
                label={AppConstants.prices[0]}
            />
        </RadioButtonGroup>
    </div>
);
export default PriceSelector;