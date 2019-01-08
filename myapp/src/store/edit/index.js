import axios from "axios";
let state = {
	footerIndex : -1 
}
let mutations = {
	editOption(state,params){
		state.footerIndex = params
	}
}
let actions = {
	
}
let getters = {
	
}
export default{
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}