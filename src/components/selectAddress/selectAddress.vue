<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    :css="false">
    <div class="address" v-show="isShow">
      <v-header :titleName="title" @back="selectAddress(currrntAdd)" :fnName="'back'"></v-header>
      <div class="search">
        <div class="inner">
          <span class="icon"><i class="iconfont icon-sousuo"></i></span>
          <input type="search" value="" autofocus="autofocus" placeholder="请输入地址" class="inputAdd" v-model="inputVal">
        </div>
      </div>
      <div class="currentAdd" v-show="addLists.length === 0">
        <h4 class="title">当前地址</h4>
        <p class="current">
          <span class="addr" @click.stop="selectAddress(currrntAdd)">{{currrntAdd}}</span>
          <span class="rePosition"><i class="iconfont icon-zuojiantou-copy"></i>{{addreplay}}</span>
        </p>
      </div>
      <div class="addcontent">
        <section class="addList">
          <ul ref="content">
            <li class="addOne" v-for="(item, index) in addLists" :key="index" @click.stop="selectAddress(item)">
              <h5 class="main">{{item.title}}</h5>
              <p class="detail">{{item.detail}}</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import Header from '@/components/publicElement/header'
import Axios from 'axios'
import {debounce, eventLister, findParent} from '@/assets/js/common.js'
import 'swiper/dist/css/swiper.css'
import Velocity from 'velocity-animate'
let startY = 0
let endY = 0
let distance = 0
let totalD = 0
let w = 0
export default {
  name: 'Address',
  data () {
    return {
      title: '选择收货地址',
      addLists: [],
      inputVal: '',
      currrntAdd: '未能获取地址',
      addreplay: '重新定位'
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  created () {
  },
  mounted () {
    this.listMove()
    w = document.body.clientWidth
  },
  methods: {
    getAddlist () {
      debounce(this.getAddlistFn, 200, 300)()
    },
    getAddlistFn () {
      if (this.inputVal === '') {
        this.addLists = []
        return false
      }
      Axios.get('api/getAddpList')
        .then((res) => {
          this.addLists = res.data
          this.$nextTick(() => {
            distance = findParent(this.$refs.content, '.addList').clientHeight - this.$refs.content.scrollHeight
          })
        }).catch((err) => {
          console.log(err)
        })
    },
    
    listMove () {
      eventLister(this.$refs.content, 'touchstart',
        (e) => {
          e.stopPropagation()
          e.cancelBubble = true
          let touch = event.targetTouches[0]
          startY = touch.clientY
          /* this.$refs.content.style.transform = 'translateY(' + totalD + 'px)'
          this.$refs.content.style.WebkitTransform = 'translateY(' + totalD + 'px)' */
          debounce(this.touchMoveFn, 100, 150)()
        }
      )
    },
      
    touchMoveFn () {
      eventLister(this.$refs.content, 'touchmove',
        (e) => {
          e.stopPropagation()
          e.cancelBubble = true
          let touch = event.targetTouches[0]
          endY = touch.clientY
          totalD += endY - startY
          startY = endY
          if (totalD > 100) {
            totalD = 90
          }
          if (totalD <= 0 && totalD + 100 <= distance) {
            totalD = distance - 150
          }
          this.$refs.content.style.transform = 'translateY(' + totalD + 'px)'
          this.$refs.content.style.WebkitTransform = 'translateY(' + totalD + 'px)'
        }
      )
      eventLister(this.$refs.content, 'touchend',
        (e) => {
          e.stopPropagation()
          e.cancelBubble = true
          if (totalD > 0) {
            totalD = 0
          }
          if (totalD <= 0 && totalD + 100 <= distance) {
            totalD = distance - 100
          }
          this.$refs.content.style.transform = 'translateY(' + totalD + 'px)'
          this.$refs.content.style.WebkitTransform = 'translateY(' + totalD + 'px)'
        })
    },
    selectAddress (item) {
      this.currrntAdd = item.title ? item.title : item
      this.inputVal = ''
      this.$emit('showfn', this.currrntAdd)
    },
    beforeEnter (el) {
      // el.style.opacity = 0
      el.style.transform = 'translateX(' + w + 'px)'
    },
    enter (el, done) {
      Velocity(el, 'stop')
      Velocity(el, {translateX: '0px'}, { duration: 1, complete: done })
    },
    leave (el, done) {
      Velocity(el, 'stop')
      let wid = `${w}px`
      Velocity(el, {translateX: wid}, { duration: 1000 })
      Velocity(el, { complete: done })
    }
  },
  watch: {
    inputVal: 'getAddlist'
  },
  components: {
    vHeader: Header
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/css/icon/iconfont.css";
.address{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #f4f4f4;
  z-index: 100000;
  transition: all 2s;
  .search{
    height: 10vw;
    padding: 2vw 4vw;
    background-color: #fff;
    .inner{
      display: flex;
      align-items: center;
      height: 100%;
      background: #f2f2f2;
      color: #999;
      border-radius: 0.333333vw;
      vertical-align: top;
      .icon{
        display: inline-block;
        width: 5vw;
        font-weight: 700;
        margin-left: 2vw;
        font-size: .875rem;
      }
      .inputAdd{
        flex: 1;
        padding: 0 1vw;
        border: none;
        outline: none;
        background: #f2f2f2;
        font-size: .875rem;
      }
    }
  }
  .currentAdd{
    .title{
      font-size: .8125rem;
      font-weight: normal;
      padding: 4vw 0 2vw 4vw;
    }
    .current{
      display: flex;
      align-items: center;
      padding: 3vw 4vw;
      background-color: #fff;
      .addr{
        flex: 1;
        font-size: .9375rem;
        font-weight: 700;
      }
      .rePosition{
        flex: 1;
        text-align: right;
        color: #2395ff;
        font-size: .875rem;
      }
    }
  }
  .addcontent{
    height: 100%;
    .addList{
      height: 100%;
      overflow: hidden;
      .addOne{
        background-color: #fff;
        padding: .293333rem .4rem;
        padding: 2.933333vw 4vw;
        color: #2a2a2a;
        border-top: 1px solid #eee;
        &:first-child{
          border-top:none;
        }
        .main{
          font-size: .9rem;
          font-weight: 700;
        }
        .detail{
          margin-top: .533333vw;
          font-size: .48rem;
        }
      }
    }
  }
}
</style>
