<template>
  <div class="wrapper" ref="homeWrapper">
    <div class="content"  >
      <div class="hot"  v-for="(item,index) in dongtai" >
        <!-- 内容区左边的头像 -->
        <div class="hot-left">
          <div class="hot-left-head" id="hot-left-head" >
            <img :src="item.dongtai.touxiang">
          </div>
        </div>
        <!-- 内容区右边的详情 -->
        <div class="hot-right">
          <!-- 昵称 -->
          <p class="hot-right-petName" id="hot-right-petName">{{item.dongtai.uname}}</p>
          <!-- 个签 -->
          <p class="hot-right-content" id="hot-right-content">{{item.dongtai.dtText}}</p>
          <!-- 动态里好友手账图片 -->
          <div class="hot-right-img">
            <img :src="item.dongtai.dongtaitu">
          </div>
          <!-- 阅读量 -->
          <div class="hot-right-read">
            <div class="read">
              阅读量:<span>{{item.dongtai.dtPinglunnum}}</span><br>
              <!-- 时间 -->
              <span class="time">{{item.dongtai.dtTime}}</span>
            </div>
            <!-- 点赞图标 -->
            <ul class="giv_a_like">
              <!-- <li class="start" @click="handleStart()"><img :src="starimg"><span>{{item.dtLikenum}}<sup>+</sup></span></li> -->
              <li class="love" @click="handleLove()"><img :src="loveimg"><span>{{item.dongtai.dtLikenum}}<sup>+</sup></span></li>
              <li class="comment" @click="handleComment()"><img src="static/img/word-mdn/icon_sy_pl@2x.png"><span>{{item.dongtai.dtLooknum}}<sup>+</sup></span></li>
            </ul>
          </div>
          <!-- 评论 -->
          <div class="hot-right-img-comment" v-for="(items,index) in item.dongtai.pl">
            <span>{{items.upname}}:</span>
            <span>{{items.pltext}}</span>
          </div>
          <div class="hot-right-img-comment">
            <span>{{item.comment_name2}}:</span>
            <span>{{item.comment2}}</span>
          </div>
          <!-- 多少条记录 -->
          <div class="look-comment" id="look-comment">共<span>{{item.dongtai.dtPinglunnum}}</span>条记录><br></div>
        </div>
      </div>
      <div></div>
    </div>
     <div class="shade" v-show="show" >
      <textarea class="inPut" placeholder="#说你想说的" v-model="placeholder"></textarea/>
      <div class="issue" @click="handleIssue()">发布</div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import axios from "../../../axios_xml/request.js";
import Vuex from "vuex";
export default {
  data() {
    return {
      dongtai: [],
      starimg:"static/img/word-mdn/空星星.png",
      loveimg:"static/img/word-mdn/空心.png",
      flag:false,
      show:false,
      placeholder:"",
      id:"1",
      user:"",
      pinglun:""
    };
  },
  components: {
    //"BSscroll-com":BSscroll
  },
  created() {
    axios({
         method:"get",
        //  url:"https://www.easy-mock.com/mock/5c370dd7f93efc493ce9c7a5/example/hot",
         url:"/api/world/uiddongtai?uid="+this.id,
        //  headers:{"Content-type":"application/json"},

    })
        .then((data)=>{
          this.dongtai=data.uiddongtai;
          this.addImg(this.dongtai)
    })
           timeout:3000
  },
  methods: {
      ...Vuex.mapMutations({
        addImg:"Wordmdn/addImg"
       }),
    // 点击星星
    handleStart(){
      this.flag=!this.flag
      this.starimg = (this.flag ?"static/img/word-mdn/实星星.png":"static/img/word-mdn/空星星.png");
    },
    // 点击爱心
    handleLove(){
      this.flag=!this.flag
      this.loveimg = (this.flag ?"static/img/word-mdn/实爱心.png":"static/img/word-mdn/空心.png");
    },
    handleComment(){
      this.show=true;
    },
    handleIssue(){
      this.show=false;
      this.placeholder=""
    }

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
li {
  list-style: none;
}
img {
  vertical-align: middle;
}
// 整体部分
.wrapper {
  width: 100%;
  height: 8.23rem;
  overflow: hidden;
  .shade{
    position: fixed;
    top:80%;
    width: 100%;
    height:20%;
    background: #eeeeee;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content:space-around;
    .inPut{
      width: 82%;
      height:82%;
      font-size:.2rem;
      // margin: 3% 0 0 3%;
      border-radius: .1rem;
      outline: none;
    }
    .issue{
      width: 15%;
      height: .45rem;
      font-size: .32rem;
      text-align: center;
      background: #3FB59D;
      border-radius: .1rem;
    }
  }
  .content {
    width: 90%;
    height: auto;
    .hot {
      width: 90%;
      height: 100%;
      min-width: 6.75rem;
      margin: 0 0 0.2rem 0.4rem;
      display: flex;

      //   左边头像
      .hot-left {
        min-height: 1rem;
        //  background: #cdcdcd;
        width: 23%;
        // 头像
        .hot-left-head {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          background: #cccccc;
          margin-left: 0.4rem;
          & > img {
            width: 0.8rem;
            height: 0.8rem;
          }
        }
      }
      //  右边内容
      .hot-right {
        height: auto;
        width: 77%;
        // 昵称
        .hot-right-petName {
          height: 0.56rem;
          line-height: 0.56rem;
          font-size: 0.3rem;
        }
        // 内容
        .hot-right-content {
          color: #888888;
          font-size: 0.24rem;
          min-height: 0.65rem;
          line-height: 0.33rem;
          height: auto;
        }
        // 图片
        .hot-right-img {
          margin: 0.2rem 0 0.2rem 0;
          width: 2.6rem;
          height: 3.89rem;
          & > img {
            width: 2.6rem;
            height: 3.89rem;
          }
        }
        // 阅读量
        .hot-right-read {
          height: .6rem;
          line-height: .3rem;
          display: flex;
          justify-content: space-between;
          .read {
            width: 1.59rem;
            color: #838383;
            font-size: 0.18rem;
          }
          // 点赞
          .giv_a_like {
            width: 1.5rem;
            height:.6rem ;
            display: flex;
            justify-content: space-between;
            align-items: center;
            //background: plum;
            li{
              margin-top:.1rem;
              width: 1rem;
              height:.6rem;
              position: relative;
              & > img{
                  width: .32rem;
                  height: .32rem;
                  margin:.1rem 0 0 .1rem;
              }
              &>span{
                position: absolute;
                left:.43rem;
                top:0rem;
                font-size: .15rem
              }
            }
          }
        }
        //评论
        .hot-right-img-comment {
          font-size: 0.26rem;
          color: #76d1c0;
          height: 0.5rem;
          line-height: 0.5rem;
          overflow: hidden;
          & > span {
            color: #616161;
          }
        }
        .look-comment {
          font-size: 0.22rem;
          color: #868686;
        }
      }
    }
  }
}
</style>

