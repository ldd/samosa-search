import React from 'react';
import AppConstants from '../../constants/constants';
import Col from 'muicss/lib/react/col';
import Button from 'muicss/lib/react/button';

const LoggeduserOptions = ({history}) => (
    <div>
        <Col lg="3" sm="12">
            <Button
                color="primary"
                style={{width:"90%"}}
                onClick={() => history.push('/unconfirmed')}>
                Confirm a sale
            </Button>
        </Col>
        <Col lg="3" sm="12" >
            <Button
                color="primary"
                style={{width:"90%"}}
                onClick={() => history.pushState(null, '/sale', {"action":AppConstants.CREATE_SALE})}>
                Create a sale
            </Button>
        </Col>
        <Col lg="3" sm="12" >
            <Button
                color="primary"
                style={{width:"90%"}}
                onClick={() => history.pushState(null, '/list', {"action":AppConstants.UPDATE_SALE})}>
                Edit sales
            </Button>
        </Col>
    </div>
);
export default LoggeduserOptions;