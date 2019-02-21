let state = {
    dongtai:""
}
let mutations = {
    addImg(state,params){
      state.dongtai=params;
    }
	
}


export default {
    namespaced:true,
    state,
    mutations,
   
}