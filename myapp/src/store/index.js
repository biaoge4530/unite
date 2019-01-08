import Vue from "vue";
import Vuex from "vuex";
import edit from "./edit";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        edit
    }
})

export default store;