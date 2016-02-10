import MainRender from './MainRender';
import MainBase from './MainBase';
import {base} from '../../base/base';
import FBSDKCore from 'react-native-fbsdkcore';
let {FBSDKAccessToken} = FBSDKCore;

class Main extends MainBase{
    constructor(props){
        super(props);
        this.state={
            saleList: [],
            selectedTab: 'map',
            filterBy: '0',
            sortBy: '0'
        };
        FBSDKAccessToken.getCurrentAccessToken((token) => {
            if(token && token.tokenString){
                base.authWithOAuthToken('facebook', token.tokenString, ()=>{});
            }
        });
    }
    render(){
        return MainRender.call(this, this.props, this.state);
    }
}
export default Main;
