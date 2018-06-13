<template>
  <div class="mainContent">
    <section class="phone">
      <input type="tel" placeholder="手机号" value="" v-model="user.phone">
      <button class="code" :disabled="dis" @click="getlogNum">{{codeDes}}</button>
    </section>
    <section class="phone">
      <input type="number" placeholder="验证码" value="" v-model="user.num">
    </section>
    <section class="tips">
      <p>温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<a href="javascript:void(0);">《用户服务协议》</a></p>
    </section>
    <section class="login">
      <button @click="logIn">登录</button>
    </section>
    <p class="about">关于我们</p>
  </div>
</template>

<script>
const DES = '获取验证码'
let timer = null
export default {
  name: 'MessageLogin',
  data () {
    return {
      user: {
        phone: '',
        num: ''
      },
      codeDes: DES,
      dis: true
    }
  },
  watch: {
    'user.phone' (news, old) {
      let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
      if (reg.test(news)) {
        this.dis = false
      } else {
        this.dis = true
      }
    }
  },
  methods: {
    getlogNum () {
      let num = 60
      this.codeDes = num + 's'
      timer = setInterval(() => {
        num--
        this.codeDes = num + 's'
        if (!num) {
          clearInterval(timer)
          this.codeDes = DES
        }
      }, 1000)
    },
    logIn () {
      clearInterval(timer)
      console.log(this.user)
    }
  }
}
</script>

<style lang="scss" scoped>
  .mainContent{
    padding: 0 10vw;
    input{
      border: none;
      outline: none;
      text-indent: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      color: #333;
      font-size: 14px;
    }
    .phone{
      position: relative;
      margin-top: 15px;
      width: 100%;
      height: 40px;
      .code{
        border: none;
        outline: none;
        background-color: rgba(255, 255, 255, 0);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 10px;
        font-size: 14px;
        &.enable{
          color: #333;
        }
      }
    }
    .tips{
      position: relative;
      margin-top: 15px;
      width: 100%;
      font-size: 14px;
      color: #999;
    }
    .login{
      position: relative;
      margin-top: 30px;
      width: 100%;
      button{
        border: none;
        outline: none;
        width: 100%;
        height: 42px;
        border-radius: 4px;
        background: #4cd96f;
        color: #fff;
        cursor: pointer;
        text-align: center;
        font-size: 16px;
        line-height: 42px;
      }
    }
    .about{
      margin-top: 15px;
      font-size: 14px;
      text-align: center;
      color: #999;
    }
  }
</style>
