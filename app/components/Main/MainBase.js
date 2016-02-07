import {Component} from 'react';
import {base} from '../../base/base';

class MainBase extends Component{
    constructor(props){
        super(props);
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
}
export default MainBase;
