import {Component} from 'react';
import OptionsRender from './OptionsRender';

class Options extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return OptionsRender.call(this, this.props, this.state);
    }
}

export default Options;
