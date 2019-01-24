<template>
  <!-- 内容区 -->
  <div class="notebook-body" >
    <div class="wrapper" ref="homeWrapper">
      <div class="content">

        <!-- 两个一个框 -->
        <div class="notebook-father">
          <!-- 手账1-->
          <router-link :to="'/mdn-notebookdown'">
            <div class="notebook" v-for="(item,index) in notebook">
              <div class="notebook-img" id="notebook-img">
                <img :src="item.url">
                <p class="notebook-page" id="notebook-page" :name="item.haName">{{item.page}}</p>
                <p class="notebook-num" id="notebook-nums" :num="item.haId">{{item.num}}</p>
              </div>
              <!-- 类别 -->
              <div class="genre">{{item.genre}}</div>
            </div>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import axios from "axios"
export default {
  data() {
    return {
      notebook: []
    };
  },
  created() {
       axios({
         method:"post",
         url:"https://www.easy-mock.com/mock/5c370dd7f93efc493ce9c7a5/example/notebook",
         headers:{"Content-type":"application/json"},
    })
        .then((data)=>{
          this.notebook=data.data.notebook;
    })
           timeout:3000
    
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(this.$refs.homeWrapper, {
      //只有设置成true pullingUp才能使用
      pullUpLoad: true,
      click: true
    });
    //console.log(this.scroll);
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.notebook-body {
  width: 7.6rem;
  margin: 0 auto;
  height: 100%;
  min-height: 6rem;
  margin-top: 0.2rem;
  
  .wrapper {
    height: 8.4rem;
    width: 100%;
    overflow: hidden;
    .content {
      //height: 17.5rem;
      .notebook-father {
        width: 100%;
        // height: 17.5rem;
        margin-bottom: 0.2rem;
        & > a {
          width: 7.5rem;
          height: 100%;
          margin-bottom: 0.3rem;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          .notebook {
            width: 2.56rem;
            height: 4.33rem;
            text-align: center;
            .notebook-img {
              width: 100%;
              height: 3.52rem;
              background: #fff;
              box-shadow: 0.05rem 0.05rem 0.2rem #eeeeee;
              & > img {
                width: 2.28rem;
                height: 2.54rem;
                margin: 0.16rem 0.12rem 0.17rem 0.16rem;
              }
              & > p {
                height: 0.4rem;
                line-height: 0.4rem;
                color: #949494;
                font-size: 0.24rem;
              }
            }
            // 类型
            .genre {
              color: #949494;
              font-size: 0.26rem;
              width: 100%;
              height: 0.66rem;
              line-height: 0.66rem;
            }
          }
        }
      }
    }
  }
}
</style>

