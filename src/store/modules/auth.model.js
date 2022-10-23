// import axios from "axios";



const state = {
    access :'',
    refresh:'',
    isAuthenticated:false,
    isLoggedIn:false,
};

const getters = {
    isLoggedIn: state => state.isLoggedIn,
    access: state => state.access,
    refresh: state => state.refresh,
};

const actions = {  
};

const mutations = {

    initialiseStore(state) {
        if (localStorage.getItem('access')) {
            state.access = localStorage.getItem('access');
            state.refresh = localStorage.getItem('refresh');
            state.isAuthenticated = true;
        }else{
            state.access = '';
            state.refresh = '';
            state.isAuthenticated=false;
        }
    },
    setAccess(state, access){
        state.access = access;
    },
    setRefresh(state, refresh){
        state.refresh = refresh;
    },
    isLoggedIn(state, isLoggedIn){
        state.isLoggedIn = isLoggedIn;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}