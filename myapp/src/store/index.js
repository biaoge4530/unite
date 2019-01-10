import Vue from "vue";
import Vuex from "vuex";
import Word from "./word";
import edit from "./edit";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        Word,
        edit
    }
})

export default store;
