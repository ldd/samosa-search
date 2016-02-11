import {base, baseUtils} from '../../base/base';

import SaleBase from './SaleBase';
import SaleRender from './SaleRender';

class Sale extends SaleBase{
    constructor(props){
        super(props);
        this.state={
            sale:{
                loc: 0,
                price: 0,
                time: 0,
                confirmed: false,
                owner: baseUtils.getUID()
            },
            info: ''
        };
    }
    componentDidMount(){
        if(this.props.params.saleId){
            this.infoRef = base.bindToState(`info/${this.props.params.saleId}`, {
                context: this,
                state: 'info'
            });
            //we set the initial state, passed down from our parent
            this.setSale(this.props.params.saleId);
        }
    }
    componentWillUnmount(){
        if(this.props.params.saleId) {
            base.removeBinding(this.infoRef);
        }
    }
    componentWillReceiveProps(nextProps){
        //if the sale id doesn't match, we unbind and bind anew using the new sale id
        if(nextProps.params.saleId !== this.props.params.saleId){
            base.removeBinding(this.infoRef);
            if(nextProps.params.saleId){
                this.infoRef = base.bindToState(`info/${nextProps.params.saleId}`, {
                    context: this,
                    state: 'info'
                });
            }
            this.setSale(nextProps.params.saleId);
        }
    }
    render(){
        return SaleRender.call(this, this.props, this.state);
    }
}
export default Sale;