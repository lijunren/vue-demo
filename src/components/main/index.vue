<template>
  <div id="index">
    <router-view></router-view>
    <footer>
      <div class="foot">
        <router-link to="/index/home" class="footer-wrapper">
          <!-- <svg class="footer-icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#h5-component-index" viewBox="0 0 22 22" width="100%" height="100%"></use>
          </svg> -->
          <span class="footer-icon"><i class="iconfont icon-changyonglogo40"></i></span>
          <span class="index-footer-text">首页</span>
        </router-link>
        <router-link to="/index/discoverRegular" class="footer-wrapper">
          <span class="footer-icon"><i class="iconfont icon-faxian"></i></span>
          <span class="index-footer-text">发现</span>
        </router-link>
        <router-link to="/index/orderRegular" class="footer-wrapper">
          <span class="footer-icon"><i class="iconfont icon-dingdan"></i></span>
          <span class="index-footer-text">订单</span>
        </router-link>
        <router-link to="/index/profileRegular" class="footer-wrapper">
          <span class="footer-icon"><i class="iconfont icon-yonghu2"></i></span>
          <span class="index-footer-text">我的</span>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/css/icon/iconfont.css';
#index {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .foot{
    display: flex;
    display: -webkit-flex;
    position:fixed;
    bottom:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 666;
    padding-top: 1.6vw;
    text-align: center;
    height: 12vw;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba($color: #000, $alpha: 0.1);
    box-shadow: 0 0.3vw 0.3vw rgba($color: #000, $alpha: 0.1) inset;
    .footer-wrapper{
      display: inline-block;
      flex: 1;
      color: #8e8e93;
      .footer-icon{
        font-weight: 700;
        width: 5.333333vw;
        height: 5.333333vw;
      };
      .index-footer-text{
        display: block;
        font-size: .266667rem;
      }
      &.index-footer-active{
        color: #0089dc;
      }

    }
  };
}
</style>
