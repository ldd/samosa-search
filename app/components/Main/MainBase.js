import {Component} from 'react';
import {base} from '../../base/base';

class MainBase extends Component{
    constructor(props){
        super(props);
    }
    changeFilter(value){
        this.setState({filterBy: value});
    }
    changeSort(value){
        this.setState({sortBy: value});
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
