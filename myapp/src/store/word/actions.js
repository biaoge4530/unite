import axios from "axios";

export default{
    handleWordData(){
        axios({
            method:"post",
            url:""
        })
        .then((data)=>{
            console.log(1);
            console.log(data);
        })
    }
}