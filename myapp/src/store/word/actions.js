import axios from "axios";

export default{
    handleWordData(){
        axios({
            method:"post",
            url:""
        })
        .then((data)=>{
            console.log(data);
            console.log("重新测试");
        })
    }
}