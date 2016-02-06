import SaleListRender from './SaleListRender';
import SaleListBase from './SaleListBase';
import {ListView} from 'react-native';

class SaleList extends SaleListBase{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            distances: null,
            dataSource: ds.cloneWithRows([])
        };
    }
    render(){
        return SaleListRender.call(this, this.props, this.state);
    }
}

export default SaleList;