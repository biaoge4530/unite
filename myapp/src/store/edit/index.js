import axios from "axios";
let state = {
	footerIndex : -1 ,
	imgIndex:-1,
	pList:[],
	addSimgbig:[],
	simgList:[
        "big1.png",
        "big2.png",
        "big3.png",
        "big4.png",
        "big5.png",
        "big6.png",
        "big7.png",
        "big8.png",
        "big9.png"
	],
	bgList: [
		"bgImg1.png",
		"bgImg2.png",
		"bgImg3.png",
		"bgImg4.png",
		"bgImg5.png",
		"bgImg6.png",
		"bgImg7.png",
		"bgImg8.png",
		"bgImg9.png"
	]
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
	},
	addSimg(state,params){
		state.addSimgbig.push(state.simgList[params])
	},
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