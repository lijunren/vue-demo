<template>
  <div class="profile">
    <v-header :titleName="'我的'" @back="backFn" :fnName="'back'"></v-header>
    <section class="profileInfo">
      <div class="img">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==" alt="" width="100%">
      </div>
      <div class="infos">
        <h5>登录/注册</h5>
        <p><i class="iconfont icon-shouji"></i>登录后享受更多特权</p>
      </div>
      <div class="more"><i class="iconfont icon-jiantouyou"></i></div>
    </section>
    <section class="banner">
      <div class="category">
        <p><i class="iconfont icon-qian" style="color:#f90;"></i></p>
        <p>钱包</p>
      </div>
      <div class="category">
        <p><i class="iconfont icon-hongbao" style="color:rgb(255, 95, 62)"></i></p>
        <p>红包</p>
      </div>
      <div class="category">
        <p><i class="iconfont icon-29" style="color:rgb(106, 194, 11)"></i></p>
        <p>金币</p>
      </div>
    </section>
    <section class="profileother">
      <a href="javascript:void(0)">
        <i class="iconfont icon-dizhi" style="color:rgb(74, 165, 240);"></i>
        <p>
          <span>我的地址</span>
          <i class="iconfont icon-jiantouyou" style="font-size:.6rem;"></i>
        </p>
      </a>
    </section>
    <section class="profileother">
      <a href="javascript:void(0)">
        <i class="iconfont icon-fenqishangcheng" style="color:#94d94a;"></i>
        <p>
          <span>金币商城</span>
          <i class="iconfont icon-jiantouyou" style="font-size:.6rem;"></i>
        </p>
      </a>
      <a href="javascript:void(0)">
        <i class="iconfont icon-lipintianchong" style="color:#fc7b53;"></i>
        <p>
          <span>分享拿5元现金</span>
          <i class="iconfont icon-jiantouyou" style="font-size:.6rem;"></i>
        </p>
      </a>
    </section>
    <section class="profileother">
      <a href="javascript:void(0)">
        <i class="iconfont icon-msnui-service-call" style="color:#79bcf4;"></i>
        <p>
          <span>我的客服</span>
          <i class="iconfont icon-jiantouyou" style="font-size:.6rem;"></i>
        </p>
      </a>
      <a href="javascript:void(0)">
        <i class="iconfont icon-changyonglogo40" style="color:#3cabff;"></i>
        <p>
          <span>下载饿了么APP</span>
          <i class="iconfont icon-jiantouyou" style="font-size:.6rem;"></i>
        </p>
      </a>
    </section>
    <section class="profileother">
      <a href="javascript:void(0)">
        <i class="iconfont icon-zuanshi" style="color:#f8d754;"></i>
        <p>
          <span>蚂蚁钻石会员特权</span>
          <i class="iconfont icon-jiantouyou" style="font-size:.6rem;"></i>
        </p>
      </a>
    </section>
  </div>
</template>

<script>
import Header from '@/components/publicElement/header'
export default {
  name: 'Profile',
  data () {
    return {}
  },
  components: {
    vHeader: Header
  },
  methods: {
    backFn () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/css/icon/iconfont.css";
.profile{
  background-color:#f5f5f5;
  min-height: 100vh;
  .profileInfo{
    display: flex;
    align-items: center;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: 6.666667vw 4vw;
    color: #fff;
    .img{
      width: 16vw;
      height: 16vw;
      border-radius: 50%;
      overflow: hidden;
    }
    .infos{
      flex: 4;
      padding: 0 5vw;
      h5{
        font-size: 1.2rem;
      }
      p{
        margin-top: 1.5vw;
        font-size: 0.8rem;
        .iconfont{
          font-size: inherit;
        }
      }
    }
  }
  .banner{
    display: flex;
    align-items: center;
    height: 22.4vw;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    .category{
      display: flex;
      align-items: center;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      border-right: 1px solid #ddd;
      font-size: 0.7rem;
      font-weight: 700;
      &:last-child{
        border-right: none;
      }
      p{
        margin-bottom: 0.3333333vw;
      }
      .iconfont{
        font-size: 1.6rem;
      }
    }
  }
  .profileother{
    margin-top: 2.666667vw;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: 1rem;
    line-height: 4.533333vw;
    background: #fff;
    a{
      display: flex;
      align-items: center;
      margin-left: 4vw;
      p{
        padding: 4vw 1.8vw;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #f5f5f5;
        span{
          flex: 1;
          margin-left: 2vw;
          color: #333;
        }
      }
      .iconfont{
        display: inline-block;
        color: #e5e5e5;
        font-size: 1rem;
        font-weight: 700;
      }
      &:last-child{
        p{
          border-bottom: none;
        }
      }
    }
  }
}

</style>
