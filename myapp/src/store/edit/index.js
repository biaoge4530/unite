import axios from "axios";
let state = {
	footerIndex : -1 ,
	imgIndex:-1,
	pList:[],
	bgImg:"",
}
let mutations = {
	editOption(state,params){
		if(state.footerIndex==params){
			state.footerIndex= -1
		}else{			
			state.footerIndex = params
		}
	},
	addbgImg(state,params){
		state.footerIndex= -1;
		state.imgIndex = params
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