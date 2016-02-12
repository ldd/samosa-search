import Rebase from 're-base';
import providers from '../constants/providers';
import utils from '../utils/utils';
const base = Rebase.createClass(providers.FIREBASE_URL);

const baseUtils = {
    getUID(){
        let auth = base.getAuth();
        let uid = auth && auth.uid;
        return uid || null;
    },
    isLoggedIn(){
        let auth = base.getAuth();
        let uid = auth && auth.uid;
        uid = uid || null;
        return uid !== null;
    },
    confirmSale(id){
        base.post(`props/${id}/confirmed`, {data: true});
    },
    createSale(sale, info){
        let id = utils.generateId();
        base.post(`props/${id}`, {data: sale});
        base.post(`info/${id}`, {data: info});
    },
    updateSale(id, sale, info){
        base.post(`props/${id}`, {data: sale});
        base.post(`info`, {data: { [id]: info}});
    },
    deleteSale(id){
        base.post(`props/${id}`, {data: null});
        base.post(`info/${id}`, {data: null});
    }
};
export {base, baseUtils};