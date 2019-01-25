import axios from "axios";
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
		console.log(state.addSimgbig)
	},
	//保存样式
	setStyle(state,params){
		state.style = params
	},
	//获取背景图片列表
	getbgImg(state,params){
		state.bgList=params.data
	},
	getSimg(state,params){
		state.simgList=params.data
	}
}
let actions = {
	//获取背景图片
	getbgImg({commit}){
		axios({
			method:"get",
			url:"https://www.easy-mock.com/mock/5c467cdc9c8153210b4a25d0/example/query",
		}).then((data)=>{
			commit("getbgImg",data.data);
		})
	},
	//获取贴图列表getSimg
	getSimg({commit}){
		axios({
			method:"get",
			url:"https://www.easy-mock.com/mock/5c467cdc9c8153210b4a25d0/example/getSimg",
		}).then((data)=>{
			commit("getSimg",data.data);
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