<template>
  <div class="search">
    <div class="head">
      <a href="javascript:void(0);" class="back" @click.stop="backfn"><i class="iconfont icon-zuojiantou-copy"></i></a>
      <div class="input">
        <span class="icon"><i class="iconfont icon-sousuo"></i></span>
        <input type="search" value="" placeholder="输入商家、商品名称">
      </div>
      <a href="javascript:void(0)" class="searchShop">搜索</a>
    </div>
    <div class="content">
      <h5 class="title">热门搜索</h5>
      <div class="hot">
        <a href="javascript:void(0)" class="every">咖啡</a>
        <a href="javascript:void(0)" class="every">凉皮</a>
        <a href="javascript:void(0)" class="every">面条</a>
        <a href="javascript:void(0)" class="every">5折简餐</a>
        <a href="javascript:void(0)" class="every">肯德基</a>
      </div>
    </div>
    <div class="list">
      <ul>
        <li class="shop">
          <div class="img"><img src="https://fuss10.elemecdn.com/a/35/8357d05ef375ac09b1f9dfc36b7adpng.png?imageMogr/format/webp/thumbnail/48x/" alt="" width="100%"></div>
          <div class="info">
            <p class="shopitem">
              <span class="name">立即米粉螺丝粉（垌冢镇你的快递费的方式的开发）</span>
              <span class="signList">
                <span class="sign">减</span>
                <span class="sign blue">蜂鸟</span>
              </span>
            </p>
            <p class="rate">评价4.7</p>
          </div>
        </li>
        <li class="shop">
          <div class="img"><img src="https://fuss10.elemecdn.com/a/35/8357d05ef375ac09b1f9dfc36b7adpng.png?imageMogr/format/webp/thumbnail/48x/" alt="" width="100%"></div>
          <div class="info">
            <p class="shopitem">
              <span class="name">立即米粉螺丝粉（垌冢镇你的快递费的方式的开发）</span>
              <span class="signList">
                <span class="sign">减</span>
                <span class="sign blue">蜂鸟</span>
              </span>
            </p>
            <p class="rate">评价4.7</p>
          </div>
        </li>
        <li class="other">
          <p class="icon"><i class="iconfont icon-sousuo"></i></p>
          <p class="names">米粉</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'search',
  data () {
    return {
      shotShopList: []
    }
  },
  created () {
    Axios.get('api/getShopList')
      .then((res) => {
        this.shotShopList = res.data
        console.log(this.shotShopList)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    backfn () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/css/icon/iconfont.css";
.search{
  .head{
    font-size: 1rem;
    display: flex;
    padding: 2vw 1vw;
    justify-content: space-between;
    align-items: center;
    .back, .searchShop{
      width: 12vw;
      color: #333;
      font-weight: 700;
      text-align: center;
    }
    .back{
      text-align: left;
    }
    .input{
      flex: 1;
      margin: 0 1vw 0 0;
      padding: 1vw 2vw;
      background-color: #f8f8f8;
      border-radius: .266667vw;
      .icon{
        font-size: .875rem;
      }
      input{
        border: none;
        outline: none;
        font-size: .875rem;
        background-color: #f8f8f8;
      }
    }
  }
  .content{
    margin-top: 4vw;
    .title{
      padding: 2vw 3.333333vw;
      color: #666;
      font-size: 1rem;
      font-weight: 700;
    }
    .hot{
      display: flex;
      padding: 0 3.333333vw 3.333333vw;
      margin-top: 3.333333vw;
      align-items: center;
      .every{
        flex: 1;
        padding: 2vw 0.666667vw;
        margin-right: 3.333333vw;
        display: inline-block;
        background-color: #f7f7f7;
        border-radius: .666667vw;
        text-align: center;
        font-size: .8rem;
      }
    }
  }
  .list{
    .shop{
      display: flex;
      align-items: center;
      height: 14.933333vw;
      padding: 1vw 3.333333vw;
      .img{
        width: 6.4vw;
        height: 6.4vw;
      }
      .info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        border-bottom: 0.13333vw solid #e3e3e3;
        .shopitem{
          display: flex;
          align-items: center;
          margin: 2.266667vw;
          .name{
            display: inline-block;
            max-width: 56vw;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: .86rem;
          }
          .signList{
            .sign{
              font-size: .5rem;
              padding: 0 .8vw;
              height: 5.933333vw;
              line-height: 5.933333vw;
              color: #fff;
              text-align: center;
              background-color: rgb(250, 112, 71);
              border-radius: .533333vw;
              transform: scale(0.5);
            }
            .blue{
              background-color: rgb(35, 149, 255);
            }
          }
        }
        .rate{
          font-size: .66rem;
          color: #999
        }
      }
    }
    .other{
      display: flex;
      align-items: center;
      height: 7.933333vw;
      padding: 1vw 3.333333vw;
      .icon{
        font-size: .75rem;
      }
      .names{
        width: 100%;
        padding: 2.266667vw 0;
        margin: 0 2.266667vw;
        border-bottom: 0.13333vw solid #e3e3e3;
        font-size: .86rem;
      }
    }
  }
}
</style>
