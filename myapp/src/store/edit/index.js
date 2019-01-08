import axios from "axios";
let state = {
	footerIndex : -1 
}
let mutations = {
	editOption(state,params){
		if(state.footerIndex==params){
			state.footerIndex= -1
		}else{			
			state.footerIndex = params
		}
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