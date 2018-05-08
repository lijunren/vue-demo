<template>
  <div class="discover">
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave">
      <div v-show="isshow" class="content">11111</div>
    </transition>
    <button @click="show">测试</button>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
let w = 0
export default {
  name: 'Discover',
  data () {
    return {
      isshow: false
    }
  },
  mounted () {
    w = document.body.clientWidth
  },
  methods: {
    show () {
      this.isshow = !this.isshow
    },
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.transform = 'translateX(' + w + 'px)'
    },
    enter (el, done) {
      Velocity(el, 'stop')
      Velocity(el, {translateX: '0px', opacity: 1}, { duration: 2000, complete: done })
    },
    leave (el, done) {
      Velocity(el, 'stop')
      let wid = `${w}px`
      Velocity(el, {translateX: wid}, { duration: 500 })
      Velocity(el, {opacity: 0}, { duration: 500, complete: done })
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: aquamarine;
  text-align: center;
}
</style>
