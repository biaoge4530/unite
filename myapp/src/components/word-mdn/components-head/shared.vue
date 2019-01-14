<template lang="">
    <div class="shared_father">
        <div class="shared">
            <ul class="list">
                <li><img src="static/img/word-mdn/fx_weixin.png">微信</li>
                <li><img src="static/img/word-mdn/fx_qq.png">QQ</li>
                <li><img src="static/img/word-mdn/fx_kongjian.png">空间</li>
                <li><img src="static/img/word-mdn/fx_penyooquan.png">朋友圈</li>
                <li><img src="static/img/word-mdn/fx_xinlang.png">新浪</li>
            </ul>
            <div class="sup">
                <img src="static/img/word-mdn/fx_hengang.png">
                分享会带来惊喜哦
                 <img src="static/img/word-mdn/fx_hengang.png">
            </div>
        </div>
        <div class="footer">取消</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.shared_father{
    width: 100%;
    height: 100%;
    background: #D5D6D6;
    .shared{
        position: absolute;
        top: 8.33rem;
        width: 100%;
        height: 3.73rem;
        background: #ffffff;
        .list{
            width: 6.05rem;
            height: 1.42rem;
            //background: #ffeecc;
            position: absolute;
            top: .76rem;
            left: .74rem;
            display: flex;
            justify-content: space-between;
           li{
               width: 1rem;
               color: #5D5D5D;
               text-align: center;
               &>img{
                 width: 1rem;
                 height: 1rem;
               }
           }
        }
        .sup{
               width: 4.4rem;
               height: .3rem;
               //background: #ffccee;
               position: absolute;
               top:2.77rem;
               left: 1.58rem;
               font-size: .18rem;
               color: #5D5D5D;
               display: flex;
               justify-content: space-around;
               align-items: center;
           }
    }
    .footer{
        position: absolute;
        top: 12.27rem;
        width: 100%;
        height: 1.08rem;
        background: #ffffff;
        font-size: .36rem;
        text-align: center;
        line-height: 1.08rem;
    }
}
</style>
