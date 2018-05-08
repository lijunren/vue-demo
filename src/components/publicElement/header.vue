<template>
  <div class="head">
    <div class="header">
      <a href="javascript:void(0);" class="back" @click.stop="backfn"><i class="iconfont icon-zuojiantou-copy"></i></a>
      <h3 class="title">{{titleName}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Address',
  props: {
    titleName: {
      type: String,
      default: '请传标题'
    },
    fnName: {
      type: String
    }
  },
  methods: {
    backfn () {
      let name = this.fnName
      this.$emit(name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/css/icon/iconfont.css";
.head{
  .header{
    position: relative;
    display: flex;
    height: 12vw;
    line-height: 12vw;
    align-items: center;
    color: #fff;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    .back{
      position: absolute;
      padding: 0 0 0 3vw;
      width: 10vw;
      height: 100%;
      color: #fff;
      .iconfont{
        font-size: 1.133333rem;
        font-weight: normal;
      }
    }
    .title{
      text-align: center;
      flex:1;
      font-size: 1.133333rem;
      font-weight: normal;
    }
  }
}
</style>
