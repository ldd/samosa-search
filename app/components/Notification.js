import React from 'react';
import Snackbar from 'material-ui/lib/snackbar';
class Notification extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render(){
        return (
        <Snackbar
            open={this.state.open}
            message={this.props.message}
            autoHideDuration={2000}
            onRequestClose={()=>{this.setState({open: false})}}
        />);
    }
}
export default Notification;