import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CardActions from 'material-ui/lib/card/card-actions';

const FormButtons = (props) => {
    /*add buttons that we need. cancel is never skipped and always added last*/
    let buttons = [];
    props.isCreating && buttons.push(<RaisedButton
        key={1} label='Create' primary={true} onClick={props.createHandler}/>);
    props.isUpdating && buttons.push(<RaisedButton
        key={2} label='Update' primary={true} onClick={props.updateHandler}/>);
    props.isUpdating && buttons.push(<RaisedButton
        key={3} label='Delete' primary={true} onClick={props.deleteHandler}/>);
    props.isConfirming && buttons.push(<RaisedButton
        key={4} label='Confirm' primary={true} onClick={props.confirmHandler}/>);
    buttons.push(<RaisedButton key={5} label='Cancel' onClick={props.cancelHandler}/>);
    return (
    <CardActions>
        {buttons}
    </CardActions>
)};
export default FormButtons;