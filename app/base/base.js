import Rebase from 're-base';

const base = Rebase.createClass('https://mcgill-samosa-search.firebaseio.com');

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