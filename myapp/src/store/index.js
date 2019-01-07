import Vue from "vue";
import Vuex from "vuex";
import Word from "./word";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        Word
    }
})

export default store;