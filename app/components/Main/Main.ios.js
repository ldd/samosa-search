import MainRender from './MainRender';
import MainBase from './MainBase';

class Main extends MainBase{
    constructor(props){
        super(props);
        this.state={
            saleList: [],
            selectedTab: 'map',
            filterBy: '0',
            sortBy: '0'
        }
    }
    render(){
        return MainRender.call(this, this.props, this.state);
    }
}
export default Main;
