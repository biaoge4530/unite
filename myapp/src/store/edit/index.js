import axios from "../../axios_xml/request";
let state = {
	footerIndex : -1 ,
	imgIndex:-1,
	pList:[],
	addSimgbig:[],
	style: [],
	simgList:[],
	bgList: []
}
let mutations = {
	//选择操作
	editOption(state,params){
		if(state.footerIndex==params){
			state.footerIndex= -1
		}else{
			state.footerIndex = params
		}
	},
	//添加背景
	addbgImg(state,params){
		state.footerIndex= -1;
		state.imgIndex = params
	},
	//添加贴图
	addSimg(state,params){
		state.addSimgbig.push(state.simgList[params])
	},
	//保存样式
	setStyle(state,params){
		state.style = params
	},
	//获取背景图片列表
	getbgImg(state,params){
    console.log(params)
		state.bgList=params
	},
	getSimg(state,params){
    state.simgList=params
	}
}
let actions = {
	//获取背景图片
	getbgImg({commit}){
		axios({
			method:"get",
			url:"/api/beijing",
		}).then((data)=>{
      commit("getbgImg",data.picture);
		})
	},
	//获取贴图列表getSimg
	getSimg({commit}){
		axios({
			method:"get",
			url:"/api/mubanpicture",
		}).then((data)=>{
      commit("getSimg",data.pictrue);
		})
	}
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
