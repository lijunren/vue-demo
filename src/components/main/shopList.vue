<template>
  <section :class="[{'maxheight': showflag}, 'shopActivity']">
    <active-content :activityList="active"></active-content>
    <div class="activitySwitch" @click="showActiveList($event)">
      <p><span>{{active.length}}个活动</span><span :class="[{'turn': showflag}, 'icon']"><i class="iconfont icon-jiantouarrow486"></i></span></p>
    </div>
  </section>
</template>

<script>
import ActiveContent from '@/components/publicElement/activeContent'
export default {
  name: 'ShopList',
  data () {
    return {
      showflag: false
    }
  },
  props: {
    active: {
      type: Array
    }
  },
  components: {
    activeContent: ActiveContent
  },
  methods: {
    showActiveList (e) {
      this.showflag = !this.showflag
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/css/icon/iconfont.css";
.shopActivity{
  display: flex;
  justify-content: space-between;
  font-size: .4rem;
  transition: all 500ms ease;
  height: 10vw;
  overflow: hidden;
  &.maxheight{
    transition: all 500ms ease;
    height: auto;
  }
  .activitySwitch{
    padding-bottom: 4vw;
    width: 26vw;
    text-align: right;
    .icon{
      display: inline-block;
      transition: all 500ms ease;
      transform: rotateZ(180deg);
      -webkit-transform: rotateZ(180deg);
      -moz-transform: rotateZ(180deg);
    }
    .turn{
      transition: all 500ms ease;
      transform: rotateZ(0);
      -webkit-transform: rotateZ(0);
      -moz-transform: rotateZ(0);
    }
  }
}
</style>
