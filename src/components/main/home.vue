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
        <ul class="listContent">
          <li class="shopDescription" v-for="(item, index) in shopList" :key="index">
            <div class="desc-1">
              <div class="descImg">
                <img :src="item.img" :alt="item.name">
              </div>
              <div class="descText">
                <section class="title">
                  <h4 class="shopName">
                    <i class="shopBrand" content="品牌" v-if="item.isBrand"></i>
                    <span class="name">{{item.name}}</span>
                  </h4>
                  <ul class="singlist">
                    <li class="sign" :content="item1" v-for="(item1, index1) in item.singlist" :key="index1"></li>
                  </ul>
                </section>
                <section class="rateInfo">
                  <div class="rateImg">
                    <div class="rate-gray">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="">
                    </div>
                    <div class="rateActive">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt="">
                    </div>
                  </div>
                  <span class="rateNum">{{item.rate}}</span>
                  <span class="oederNum">月售{{item.goodNum}}单</span>
                </section>
                <section class="distributionInfo">
                  <div class="distributionMoney">
                    <span class="distribution1">¥{{item.startM}}起送</span>
                    <span class="verticalLine"></span>
                    <span class="distribution1">配送费¥{{item.distributionFee}}</span>
                  </div>
                  <div class="distributionTime">
                    <span class="distribution1">{{item.distance}}km</span>
                    <span class="verticalLine"></span>
                    <span class="distribution1">{{item.time}}分钟</span>
                  </div>
                </section>
              </div>
            </div>
            <div class="desc-2">
              <section class="shopOther">
                <span class="goodshop red" v-show="item.idGoodShop"><i class="iconfont icon-koubei"></i> 口碑人气好店</span>
                <span>
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=" alt="">
                </span>
                <shop-list :active="item.active"></shop-list>
              </section>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import Axios from 'axios'
import ShopList from '@/components/main/shopList'
let headSwipers
let menuSwiper
export default {
  name: 'Home',
  data () {
    return {
      msg: '定位中···',
      personNum: 0,
      shopList: [],
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
  components: {
    shopList: ShopList
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
    Axios.get('api/getShopList')
      .then((res) => {
        this.shopList = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  mounted () {
    this.headSwiper()
    this.menuSwiper()
    this.scroll()
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
    },
    scroll () {
      let he = document.getElementsByClassName('head-1')[0].clientHeight
      window.addEventListener('scroll', () => {
        let scrollTop = 0
        let search = document.getElementsByClassName('head-2')[0]
        if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop
        } else if (document.body) {
          scrollTop = document.body.scrollTop
        }
        if (scrollTop >= he) {
          search.classList.add('scroll')
        } else {
          search.classList.remove('scroll')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/css/icon/iconfont.css";
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
    padding: 2.77777vw 0;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    background-image: -webkit-linear-gradient(90deg,#0af,#0085ff);
    background-image: -o-linear-gradient(90deg,#0af,#0085ff);
    background-image: -moz-linear-gradient(90deg,#0af,#0085ff);
    color: #fff;
    .head-1{
      margin: .77777vw 3.733333vw;
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
      padding: 2vw 3.733333vw;
      background-color: #fff;
      color:#999;
      text-align: center;
      height: 9.6vw;
      line-height: 9.6vw;
      font-size: .377777rem;
      background-color: rgba(255,255,255,0);
      &.scroll{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        background-color: #0af;
      }
      span{
        display: inline-block;
        width: 100%;
        background: #fff;
        border-radius: 5px;
      }
    }
  }
  .mainContent{
    padding-bottom: 17.6vw;
    .swiper-container{
      .swiper-pagination{
        bottom: -.2rem;
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
        width: 14vw;
        margin: 0 3vw;
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
        height: 32.333333vw;
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
      .listContent{
        .shopDescription{
          padding: 4vw 4vw;
          border-bottom: 0.1333333vw solid #eee;
          margin-bottom: 2vw;
          &:first-child{
            padding: 0 4vw 4vw 4vw;
          }
          .desc-1{
            display: flex;
            display: -webkit-flex;
            .descImg{
              width: 17.333333vw;
              img{
                box-sizing: border-box;
                display: block;
                border: 0.333333vw solid rgba(0, 0, 0, 0.08);
                border-radius: 0.533333vw;
              }
            }
            .descText{
              display: flex;
              flex-flow:column;
              justify-content: space-between;
              margin-left: 2vw;
              flex: 1;
              .title{
                display: flex;
                display: -webkit-flex;
                align-items: center;
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                justify-content: space-between;
                .shopName{
                  color: #333;
                  font-weight: 700;
                  font-size: 1rem;
                  overflow: hidden;
                  .shopBrand{
                    position: relative;
                    margin-right: .133333rem;
                    margin-right: 7.333333vw;
                    padding: .026667rem .066667rem;
                    padding: .266667vw .666667vw;
                    color: transparent;
                    text-align: center;
                    white-space: nowrap;
                    font-weight: 700;
                    font-size: .293333rem;
                    font-style: normal;
                    line-height: normal;
                    &:after{
                      display: block;
                      position: absolute;
                      left: 0;
                      top: 0;
                      z-index: 1;
                      content: attr(content);
                      padding: .011373rem .02844rem;
                      padding: .113733vw .2844vw;
                      padding: .053333rem .133333rem;
                      padding: .533333vw 1.333333vw;
                      color: #6f3f15;
                      font-weight: 700;
                      font-size: 1.386667rem;
                      border-radius: .022747rem;
                      border-radius: .227467vw;
                      border-radius: .106667rem;
                      border-radius: 1.066667vw;
                      background-image: -webkit-linear-gradient(229deg,#fff100,#ffe339);
                      background-image: linear-gradient(-139deg,#fff100,#ffe339);
                      white-space: nowrap;
                      -webkit-transform: scale(.5);
                      transform: scale(.5);
                      -webkit-transform-origin: 0 0;
                      transform-origin: 0 0;
                    }
                  }
                  .name{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                }
                .singlist{
                  display: flex;
                  display: -webkit-flex;
                  align-items: center;
                  -webkit-align-items: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  .sign{
                    position: relative;
                    height: .346667rem;
                    height: 3.466667vw;
                    width: .346667rem;
                    width: 3.466667vw;
                    margin-left: .08rem;
                    margin-left: .8vw;
                    &:after{
                      display: -webkit-flex;
                      display: -webkit-box;
                      display: -ms-flexbox;
                      display: flex;
                      -webkit-justify-content: center;
                      -webkit-box-pack: center;
                      -ms-flex-pack: center;
                      justify-content: center;
                      -webkit-align-items: center;
                      -webkit-box-align: center;
                      -ms-flex-align: center;
                      align-items: center;
                      position: absolute;
                      left: 0;
                      top: 0;
                      z-index: 1;
                      font-size: 0.8125rem;
                      color: #999;
                      content: attr(content);
                      border-radius: .00568rem;
                      border-radius: .0568vw;
                      border-radius: .026667rem;
                      border-radius: .266667vw;
                      width: .147907rem;
                      width: 1.479067vw;
                      width: .693333rem;
                      width: 6.933333vw;
                      height: .147907rem;
                      height: 1.479067vw;
                      height: .693333rem;
                      height: 6.933333vw;
                      line-height: normal;
                      border: .063333rem solid #ddd;
                      border: .4vw solid #ddd;
                      -webkit-transform: scale(.5);
                      transform: scale(0.5);
                      -webkit-transform-origin: 0 0;
                      transform-origin: 0 0;
                    }
                  }
                }
              }
              .rateInfo{
                display: flex;
                align-items: center;
                .rateImg{
                  position: relative;
                  display: inline-block;
                  width: 16vw;
                  .rate-gray, .rateActive{
                    img{
                      width: 16vw;
                    }
                  }
                  .rateActive{
                    position: absolute;
                    top: 0;
                    left: 0;
                    overflow: hidden;
                  }
                }
                .rateNum, .oederNum{
                  font-size: 0.4rem;
                  margin-left: 1.33333vw;
                }
              }
              .distributionInfo{
                display: flex;
                display: -webkit-flex;
                align-items: center;
                justify-content: space-between;
                font-size: 0.4rem;
                .verticalLine{
                  overflow: hidden;
                  &:before{
                    margin: 0 0.3333vw;
                    content: "|";
                    color: #ddd;
                  }
                }
              }
            }
          }
          .desc-2{
            .shopOther{
              padding-left: 19.3333333vw;
              display: flex;
              flex-flow: column;
              justify-content: space-between;
              .goodshop{
                margin-top: 1.666666vw;
                font-size: 0.4rem;
                .iconfont{
                  font-size: 0.1rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
