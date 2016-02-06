import Rebase from 're-base';
import providers from '../constants/providers';
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
    }
};

export {base, baseUtils};