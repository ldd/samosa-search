import React from 'react';
import Radio from '../../../node_modules/muicss/lib/react/radio';
import AppConstants from '../../constants/constants';

const PriceSelector = () => (
    <div>
        <label>price</label>
        <Radio isDisabled={true}
               name={AppConstants.prices[0]}
               label={AppConstants.prices[0]}
               isChecked={true} />
    </div>
);
export default PriceSelector;