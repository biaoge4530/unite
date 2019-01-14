import Vue from "vue";
import Vuex from "vuex";
import Word from "./word";
import edit from "./edit";
import My from "./my"
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        Word,
        edit,
        My
    }
})

export default store;
