import MainRender from './MainRender';
import MainBase from './MainBase';

class Main extends MainBase{
    constructor(props){
        super(props);
        this.state={
            open: false,
            saleList: []
        }
    }
    render(){
        return MainRender.call(this, this.props, this.state);
    }
}
export default Main;
