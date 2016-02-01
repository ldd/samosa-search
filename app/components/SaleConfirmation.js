import React from 'react';
import Store from '../store/store';

const EditSaleView = () => (
    <div className="">
        confirmations:0/{Store.getNeededConfirmations()}
    </div>
);

export default EditSaleView;