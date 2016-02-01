import React from 'react';
import AppConstants from '../../constants/constants';
import Col from 'muicss/lib/react/col';
import Button from 'muicss/lib/react/button';

const DefaultOptions = ({history}) => (
    <Col lg='3'  sm='12'>
        <Button
            style={{width:'90%'}}
            color='primary' variant='raised'
            onClick={() => history.pushState(null, '/list', {action:AppConstants.READ_SALES})}>
            See all sales
        </Button>
    </Col>
);
export default DefaultOptions;