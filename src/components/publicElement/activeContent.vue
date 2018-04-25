<template>
  <div class="activeContent">
    <p class="content" v-for="(item, index) in activityList" :key="index">
      <span :class="['activeHead', 'shou', {ohter: index != 0}]">{{item.title}}</span>
      <span class="activText">{{item.content}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ActiveContent',
  data () {
    return {}
  },
  props: {
    activityList: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
  .activeContent{
    flex: 1;
    overflow: hidden;
    .shou{
      background-color: rgb(112, 188, 70);
    }
    .ohter{
      background-color: rgb(240, 115, 115);
    }
    .content{
      padding: .3333vw 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .activeHead{
        flex: 1;
        display: inline-block;
        border-radius: 0.63333vw;
        padding: 0.13333vw 0.33333vw;
        text-align: center;
      }
      .activText{
        flex: 15;
        display: inline-block;
        margin-left: 1vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
