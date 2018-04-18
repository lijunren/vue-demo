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
    <div class="headSwiper">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperData" :key="index">
            <a :href="item.href"><img :src="item.img" alt="" width="100%"></a>
          </div>
          <div class="swiper-pagination"  slot="pagination"></div>
      </div>
    </div>
    <section>
      <div class="menubar">
        <a :href="item.src" v-for="(item, index) in menuList" :key="index">{{item.src}}</a>
      </div>
    </section>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
let headSwipers
export default {
  name: 'Home',
  data () {
    return {
      msg: '定位中···',
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
      menuList: [
        {
          src: 'javascript:void(0)',
          img: '',
          name: ''
        },
        {
          src: 'javascript:void(0)',
          img: '',
          name: ''
        },
        {
          src: 'javascript:void(0)',
          img: '',
          name: ''
        },
        {
          src: 'javascript:void(0)',
          img: '',
          name: ''
        },
        {
          src: 'javascript:void(0)',
          img: '',
          name: ''
        },
        {
          src: 'javascript:void(0)',
          img: '',
          name: ''
        },
        {
          src: 'javascript:void(0)',
          img: '',
          name: ''
        },
        {
          src: 'javascript:void(0)',
          img: '',
          name: ''
        }
      ]

    }
  },
  mounted () {
    this.headSwiper()
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/css/icon/iconfont.css";
.home{
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

}
</style>
