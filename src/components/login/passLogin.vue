<template>
  <div class="mainContent">
    <section class="phone">
      <input type="tel" placeholder="手机/邮箱/用户名" value="" v-model="user.ID">
    </section>
    <section class="phone">
      <input type="password" placeholder="密码" value="" v-model="user.Password">
      <div :class="['passSwitch', {open: open.type}]" @click="switchPass">
        <div :class="['onOff', {opens: open.type}]"></div>
       {{open.des}}
      </div>
    </section>
    <section class="login">
      <button @click="loginFn">登录</button>
    </section>
    <p class="about">关于我们</p>
  </div>
</template>

<script>
const CLOSE = '· · ·'
const OPEN = 'abc'
export default {
  name: 'PassLogin',
  data () {
    return {
      user: {
        ID: '',
        Password: ''
      },
      open: {
        type: false,
        des: CLOSE
      }
    }
  },
  methods: {
    switchPass () {
      this.open.type = !this.open.type
      this.open.des = this.open.type ? OPEN : CLOSE
    },
    loginFn () {
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
      .passSwitch{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: absolute;
        top: 14px;
        right: 10px;
        padding: 0 6px;
        width: 30px;
        height: 16px;
        border: 1px solid #ddd;
        border-radius: 10px;
        color: #999;
        font-size: 12px;
        .onOff{
          position: absolute;
          top: -1px;
          left: -1px;
          width: 16px;
          height: 16px;
          border: 1px solid #ddd;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
          transition: all 0.3s;
          &.opens{
            transform: translateX(26px);
            transition: all 0.3s;
          }
        }
        &.open{
          justify-content: flex-start;
          color: #fff;
          border-color: #3190e8;
          background: #3190e8;
        }
      }
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
