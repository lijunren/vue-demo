<template>
  <div class="home">
    <header class="head">
      <div class="head-1">
        <span class="he-1"><i class="iconfont icon-dizhi"></i></span>
        <span class="he-2">{{msg}}</span>
        <span class="he-3"><i class="iconfont icon-jiantouarrow486"></i></span>
      </div>
      <div class="head-2">
        <span><i class="iconfont icon-sousuo"></i>搜索饿了么商家、商品名称</span>
      </div>
    </header>
    <div class="headSwiper swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperData" :key="index">
            <a :href="item.href"><img :src="item.img" alt="" width="100%"></a>
          </div>
      </div>
      <div class="swiper-pagination"  slot="pagination"></div>
    </div>
    <div class="mainContent">
      <div class="menuSwiper swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide menubar" v-for="(item,index) in menuList" :key="index">
            <div class="menuInner" v-for="(munu, index) in item" :key="index">
              <a :href="munu.src">
                <img :src="munu.img" :title="munu.name" width="100%">
                <p>{{munu.name}}</p>
              </a>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"  slot="pagination"></div>
      </div>
      <div class="recommend">
        <a class="recommendList" href="javasctipt:void(0)">
          <h4 class="title">限量抢购</h4>
          <p class="description">超值美味9.9元起</p>
          <p class="activity"><span class="red">{{personNum}}人</span>正在抢 ></p>
          <div class="imgs">
            <img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
          </div>
        </a>
        <a class="recommendList" href="javasctipt:void(0)">
          <h4 class="title red">品质套餐</h4>
          <p class="description">搭配齐全吃得好</p>
          <p class="activity caramel">立即抢购 ></p>
           <div class="imgs">
            <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
          </div>
        </a>
      </div>
      <div class="shopList">
        <div class="shopListTitle">推荐商家</div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import Axios from 'axios'
let headSwipers
let menuSwiper
export default {
  name: 'Home',
  data () {
    return {
      msg: '定位中···',
      personNum: 0,
      swiperData: [
        {
          img: 'https://fuss10.elemecdn.com/b/0a/5b1ab540506687c7b93e148704db1jpeg.jpeg?imageMogr/format/webp/',
          href: 'www.baidu.com'
        },
        {
          img: 'https://fuss10.elemecdn.com/0/e7/64044fb6df771e9cb42196ae3eeeejpeg.jpeg?imageMogr/format/webp/',
          href: 'www.hao123.com'
        }
      ],
      menuList: []
    }
  },
  created () {
    Axios.get('api/getMenu')
      .then((res) => {
        let count = res.data.length
        let num = Math.ceil(count / 10)
        for (let i = 0; i < num; i++) {
          this.menuList.push(res.data.slice(i * 10, (i + 1) * 10))
        }
      })
      .catch((err) => {
        console.log(err)
      })
    Axios.get('api/getNumber')
      .then((res) => {
        this.personNum = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  mounted () {
    this.headSwiper()
    this.menuSwiper()
  },
  methods: {
    headSwiper () {
      headSwipers = new Swiper('.headSwiper', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: {
          disableOnInteraction: false,
          delay: 2000
        },
        autoplayDisableOnInteraction: false,
        observer: true,
        observeParents: true
      })
      headSwipers.params.control = headSwipers
    },
    menuSwiper () {
      menuSwiper = new Swiper('.menuSwiper', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        paginationClickable: true,
        speed: 600,
        autoplayDisableOnInteraction: false,
        observer: true,
        observeParents: true
      })
      menuSwiper.params.control = menuSwiper
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/css/icon/iconfont.css";
.home{
  img{
    width: 100%;
  }
  .red{
    color: #eb1919;
  }
  .caramel{
    color: #af8260;
  }
  .head{
    padding: 2.666667vw 3.733333vw 0;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    background-image: -webkit-linear-gradient(90deg,#0af,#0085ff);
    background-image: -o-linear-gradient(90deg,#0af,#0085ff);
    background-image: -moz-linear-gradient(90deg,#0af,#0085ff);
    color: #fff;
    .head-1{
      margin: 5px 0;
      span{
        display: inline-block;
        margin: 1.5vw 0;
        vertical-align: top;
      }
      .he-2{
        max-width: 60%;
        word-wrap: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .head-2{
      padding: 1.5vw 0;
      background-color: #fff;
      color:#999;
      text-align: center;
      height: 9.6vw;
      line-height: 9.6vw;
      font-size: .377777rem;
      border-radius: 5px;
    }
  }
  .mainContent{
    .swiper-container{
      .swiper-pagination{
        bottom: 0;
        .my-pagination-bullet{
          background-color: #000;
        }
        .my-pagination-bullet-active{
            opacity: 1;
            background-color: #fff;
        }
      }
    }
    .menubar{
      display: flex;
      display: -webkit-flex;
      flex-wrap: wrap;
      .menuInner{
        width: 16vw;
        margin: 0 2vw 2vw 2vw;
        text-align: center;
        a{
          display: inline-block;
          padding: 2vw;
          color: #666;
          font-size: 0.36rem;
        }
      }
    }
    .recommend{
      display: flex;
      display: -webkit-flex;
      padding: 3vw;
      .recommendList{
        position: relative;
        display: inline-block;
        flex: 1;
        padding: 2vw;
        margin: 3vw 0;
        height: 35.333333vw;
        color: #333;
        background-color: #f9f9f9;
        .title{
          font-size: .453333rem;
          margin-bottom: 1.3333333vw;
        }
        .description{
          font-size: .346667rem;
          color: #777;
          margin-bottom: 2.4vw;
        }
        .activity{
          font-size: .32rem;
          font-weight: 700;
        }
        .imgs{
          position: absolute;
          right: 0;
          bottom: -2vw;
          width: 32vw;
        }
        &:first-child{
          margin-right: 0.8vw;
        }
      }
    }
    .shopList{
      .shopListTitle{
        display: flex;
        text-align: center;
        height: 9.6vw;
        align-items: center;
        justify-content: center;
        font-size: .4rem;
        color: #000;
        &:before, &:after{
          display: block;
          content: "";
          width: .533333rem;
          width: 5.333333vw;
          height: .026667rem;
          height: .266667vw;
          background-color: #999;
        }
        &:before{
          margin-right: 3.466667vw;
        }
        &:after{
          margin-left: 3.466667vw;
        }
      }
    }
  }
}
</style>
