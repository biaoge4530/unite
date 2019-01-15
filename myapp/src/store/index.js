import Vue from "vue";
import Vuex from "vuex";
import Word from "./word";
import edit from "./edit";
import My from "./my"
import Login from "./login"
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        Word,
        edit,
        My,
        Login
    }
})

export default store;
