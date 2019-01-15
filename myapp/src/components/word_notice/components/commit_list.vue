<template>
  <div class="commit_list">
    <div class="list_null" v-show="!flag">
      <img src="../../../../static/img/search&notice/commit@2x.png" alt>
      <p>还没有人给你评论哦...</p>
    </div>

    <div class="comments" v-show="flag">
      <!-- 添加滚动 -->
      <div class="wrepper" ref="homeWrapper">
        <ul class="content">
          <li class="content-list" v-for="(item,index) in nav">
            <div class="content-head">
              <img :src="item.url">
            </div>
            <p class="content-name">
              <span>{{item.name}}</span>
            </p>
            <p class="critical">
              <span>{{item.critical}}</span>
            </p>
            <p class="time">
              <span>{{item.time}}</span>
            </p>
            <div class="content-notebook"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Header } from "mint-ui";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      flag: true,
      nav: [
        {
          url: "../../../../static/img/word-mdn/touxiang_sy@3x.png",
          name: "昵称",
          critical: "评论了你哈哈",
          time: "1小时"
        },
        {
          url: "../../../../static/img/word-mdn/touxiang_sy@3x.png",
          name: "昵称",
          critical: "评论了你哈哈",
          time: "1小时"
        },
        {
          url: "../../../../static/img/word-mdn/touxiang_sy@3x.png",
          name: "昵称",
          critical: "评论了你哈哈评论了你哈哈评论了你哈哈评论了你哈哈",
          time: "1小时"
        },
        {
          url: "../../../../static/img/word-mdn/touxiang_sy@3x.png",
          name: "昵称",
          critical: "评论了你哈哈",
          time: "1小时"
        },
        {
          url: "../../../../static/img/word-mdn/touxiang_sy@3x.png",
          name: "昵称",
          critical: "评论了你哈哈",
          time: "1小时"
        },
        {
          url: "../../../../static/img/word-mdn/touxiang_sy@3x.png",
          name: "昵称",
          critical: "评论了你哈哈评论了你哈哈评论了你哈哈评论了你哈哈",
          time: "1小时"
        }
      ]
    };
  },
  methods:{
    handleToggle(){
        if(this.nav.length>0){
            this.flag = true;
        }else{
            this.flag = false;
        }
    }
  },
  created(){
      this.handleToggle()
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(this.$refs.homeWrapper, {
      //只有设置成true pullingUp才能使用
      pullUpLoad: true,
      click: true
    });
  }
};
</script>


<style scoped lang="scss">
.commit_list {
  width: 100%;
  .list_null {
    width: 100%;
    margin-top: 4.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 2.22rem;
      height: 1.93rem;
    }
    p {
      margin-top: 0.2rem;
      font-size: 0.36rem;
      color: #616161;
    }
  }
  .comments {
    background: #f3f3f3;
    height: 12.06rem;
    width: 100%;
    .wrepper {
      height: 12.06rem;
      overflow: hidden;
      .content {
        .content-list {
          height: 2.38rem;
          background: #ffffff;
          margin-bottom: 0.02rem;
          position: relative;
          .content-head {
            width: 0.88rem;
            height: 0.88rem;
            //background: #ffeecc;
            position: absolute;
            left: 0.24rem;
            top: 0.74rem;
            & > img {
              width: 0.88rem;
              height: 0.88rem;
            }
          }
          .content-name {
            position: absolute;
            top: 0.57rem;
            left: 1.68rem;
            width: 0.8rem;
            height: 0.4rem;
            font-size: 0.3rem;
            font-weight: bold;
            color: #5e5e5e;
          }
          .critical {
            position: absolute;
            top: 1.13rem;
            left: 1.41rem;
            width: 4.59rem;
            height: 0.4rem;
            font-size: 0.28rem;
            color: #5e5e5e;
          }
          .time {
            position: absolute;
            top: 0.68rem;
            left: 5.29rem;
            width: 0.7rem;
            height: 0.2rem;
            font-size: 0.18rem;
            color: #848484;
          }
          .content-notebook {
            position: absolute;
            top: 0.68rem;
            left: 6.2rem;
            width: 1.06rem;
            height: 1.06rem;
            background: #f3f3f3;
          }
        }
      }
    }
  }
}
</style>
