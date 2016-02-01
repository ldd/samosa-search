import React from 'react';
import Button from '../../../node_modules/muicss/lib/react/button';

const FormButtons = (props) => (
    <div>
        {props.isCreating &&
        <Button color='primary' onClick={props.createHandler}>
            Create
        </Button>
        }
        {props.isUpdating &&
        <div>
            <Button color='primary' onClick={props.updateHandler}>
                Update
            </Button>
            <Button color='primary' onClick={props.deleteHandler}>
                Delete
            </Button>
        </div>
        }
        <Button variant='raised'
                onClick={props.cancelHandler}>
            Cancel
        </Button>
    </div>
);
export default FormButtons;