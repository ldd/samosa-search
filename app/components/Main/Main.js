import {Component} from 'react';
import {base} from '../../base/base';
import MainRender from './MainRender';


class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            open: false,
            saleList: [],
            selectedTab: 'map'
        }
    }
    componentDidMount(){
        this.ref = base.bindToState('props', {
            context: this,
            asArray: true,
            state: 'saleList'
        });
    }
    componentWillUnmount(){
        base.removeBinding(this.ref);
    }
    render(){
        return MainRender.call(this, this.props, this.state);
    }
}
export default Main;
