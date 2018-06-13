<template>
  <div class="discover">
    <v-header :titleName="'发现'" @back="backFn" :fnName="'back'"></v-header>
    <div class="titleImg">
      <a href="javascript:void(0)">
        <img src="https://fuss10.elemecdn.com/4/5c/389dc2182920b6da9ba46948604d3gif.gif" alt="果蔬商超" width="100%">
      </a>
    </div>
    <section class="recommend">
      <div class="left">
        <a class="block_1">
          <div class="name">
            <h4 class="title">百元红包</h4>
            <p class="tip">兴业银行联名卡</p>
          </div>
          <div class="img">
            <div>
              <img src="https://fuss10.elemecdn.com/3/cc/a45d2b9d7d09bbc49b40d4e626093jpeg.jpeg?imageMogr/format/webp/" alt="" width="100%">
            </div>
          </div>
        </a>
        <a class="block_2">
          <div class="name">
            <h4 class="title">周边优惠</h4>
            <p class="tip">领取口碑好券</p>
          </div>
          <div class="img">
            <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="" width="100%">
          </div>
        </a>
      </div>
      <div class="right">
        <a class="block_2">
          <div class="name">
            <h4 class="title">周边优惠</h4>
            <p class="tip">领取口碑好券</p>
          </div>
          <div class="img">
            <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="" width="100%">
          </div>
        </a>
        <a class="block_2">
          <div class="name">
            <h4 class="title">周边优惠</h4>
            <p class="tip">领取口碑好券</p>
          </div>
          <div class="img">
            <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="" width="100%">
          </div>
        </a>
        <a class="block_2">
          <div class="name">
            <h4 class="title">周边优惠</h4>
            <p class="tip">领取口碑好券</p>
          </div>
          <div class="img">
            <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="" width="100%">
          </div>
        </a>
      </div>
    </section>
    <section class="limitTimer">
      <div class="title">
        <h5><span class="line brfore"></span>限时好礼<span class="line after"></span></h5>
        <p>金币换豪礼</p>
      </div>
      <div class="content">
        <a class="one">
          <p class="head">限时优惠</p>
          <div class="imgs">
            <img src="https://fuss10.elemecdn.com/7/bd/c33fda733387afa9a709b0415615cjpeg.jpeg?imageMogr/format/webp/" alt="" width="100%">
          </div>
          <p class="name">5元饿了么红包</p>
          <p class="price">150金币<del class="deleLine">￥5</del></p>
        </a>
        <a class="one">
          <p class="head">特价换购</p>
          <div class="imgs">
            <img src="https://fuss10.elemecdn.com/a/a5/4ce3b1a6dfc42ec54d0a389f5cc13jpeg.jpeg?imageMogr/format/webp/" alt="" width="100%">
          </div>
          <p class="name">5元饿了么红包</p>
          <p class="price">150金币<del class="deleLine">￥5</del></p>
        </a>
        <a class="one">
          <p class="head">特价换购</p>
          <div class="imgs">
            <img src="https://fuss10.elemecdn.com/5/17/bbc669132d02deae9300c45097a19jpeg.jpeg?imageMogr/format/webp/" alt="" width="100%">
          </div>
          <p class="name">机械手感键鼠套装</p>
          <p class="price">9金币<del class="deleLine">￥129</del></p>
        </a>
      </div>
      <div class="more">
        <a href="">查看更多 ></a>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/publicElement/header'
export default {
  name: 'Discover',
  data () {
    return {
      isshow: false
    }
  },
  mounted () {
  },
  methods: {
    backFn () {
      this.$router.go(-1)
    }
  },
  components: {
    vHeader: Header
  }
}
</script>

<style lang="scss" scoped>
.discover{
  margin-bottom: 20vw;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f5f5f5;
  .titleImg{
    background-color: #fff;
    border-bottom: 1px solid #ececec;
  }
  .recommend{
    display: flex;
    background-color: #fff;
    &>div{
      width: 100%;
      display: flex;
      flex-direction: column;
      &>a{
        padding: 5.866667vw 2.933333vw 1.6vw 4.266667vw;
      }
    }
    .left{
      .block_1{
        flex: 2;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #ededed;
        border-right: 1px solid #ededed;
        .name{
          .title{
            line-height: 1.2;
            margin-bottom: 1.6vw;
            font-size: 1rem;
            color: rgb(232, 143, 40);
          }
          .tip{
            width: 30vw;
            line-height: 1.2;
            font-size: 0.75rem;
            color: #999;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .img{
          width: 100%;
          display: flex;
          justify-content: flex-end;
          &>div{
            width: 20vw;
            padding: 2vw;
          }
        }
      }
      .block_2{
        flex: 1;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ededed;
        border-right: 1px solid #ededed;
        .name{
          .title{
            line-height: 1.2;
            margin-bottom: 1.6vw;
            font-size: 1rem;
            color: rgb(232, 143, 40);
          }
          .tip{
            width: 30vw;
            line-height: 1.2;
            font-size: 0.75rem;
            color: #999;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .img{
          width: 10vw;
          padding: 2vw;
        }
      }
    }
    .right{
      .block_2{
        flex: 1;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ededed;
        .name{
          .title{
            line-height: 1.2;
            margin-bottom: 1.6vw;
            font-size: 1rem;
            color: rgb(232, 143, 40);
          }
          .tip{
            width: 30vw;
            line-height: 1.2;
            font-size: 0.75rem;
            color: #999;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .img{
          width: 10vw;
          padding: 2vw;
        }
      }
    }
  }
  .limitTimer{
    margin-top: 3vw;
    padding: 3vw;
    text-align: center;
    background-color: #fff;
    .title{
      h5{
        display: flex;
        align-items: center;
        justify-content: center;
        .line{
          position: relative;
          display: inline-block;
          margin: 0 2vw;
          width: 4vw;
          height: 0;
          border: 0.033333rem solid #333;
        }
        .brfore:after{
          position: absolute;
          right: -1vw;
          top: -2px;
          content: '';
          width: 5px;
          height: 5px;
          background-color: #333;
          border-radius: 50%;
        }
        .after:after{
          position: absolute;
          left: -1vw;
          top: -2px;
          content: '';
          width: 5px;
          height: 5px;
          background-color: #333;
          border-radius: 50%;
        }
      }
      p{
        font-size: 12px;
        color: #999;
      }
    }
    .content{
      margin-top: 3vw;
      display: flex;
      white-space: nowrap;
      .one{
        flex: 1;
        position: relative;
        padding: 2vw;
        .head{
          position: absolute;
          top: 0;
          left: 0;
          font-size: .293333rem;
          color: #fff;
          background: #413d3c;
          padding: .666667vw;
        }
        .imgs{
          height: 30vw;
        }
        .name{
          font-size: 0.875rem;
        }
        .price{
          font-size: 0.875rem;
          color: #ff5339;
          .deleLine{
            margin-left: 5px;
            font-size: 0.75rem;
            color: #aaa;
          }
        }
      }
    }
    .more{
      margin-top: 5vw;
      font-size: .875rem;
      a{
        color: #999;
      }
    }
  }
}
</style>
