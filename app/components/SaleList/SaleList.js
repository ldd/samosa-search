import SaleListRender from './SaleListRender';
import SaleListBase from './SaleListBase';

class SaleList extends SaleListBase{
    constructor(props){
        super(props);
        this.state = {
            distances: null
        };
    }
    render(){
        return SaleListRender.call(this, this.props, this.state);
    }
}

export default SaleList;