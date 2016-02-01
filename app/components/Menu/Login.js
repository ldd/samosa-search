import React from 'react';
import Col from 'muicss/lib/react/col';
import Button from 'muicss/lib/react/button';

const Login = ({handler}) => (
    <Col lg='3' lg-offset='3' sm='12'>
        <Button className='facebook-login'
                style={{width:'90%'}}
                onClick={handler}>
            Log in with Facebook
        </Button>
    </Col>
);
export default Login;