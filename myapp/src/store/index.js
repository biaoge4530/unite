import Vue from "vue";
import Vuex from "vuex";
import Word from "./word";
import edit from "./edit";
import My from "./my"
import Login from "./login"
import { getCookie } from "../utils/Auth";

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    Token: !getCookie()?"":getCookie().split("&")[0],
    useId: !getCookie()?"":getCookie().split("&")[1],
    useName: !getCookie()?"":getCookie().split("&")[2],
  },
  mutations: {
    setToken(state, data) {
      state.Token= data.data.token.split("&")[0]
      state.useId=data.data.token.split("&")[1]
      state.useName= data.data.token.split("&")[2]
    }
  },
  modules: {
    Word,
    edit,
    My,
    Login
  }
})
console.log(store)
export default store;
