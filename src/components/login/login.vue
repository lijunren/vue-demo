<template>
  <div class="login">
    <div class="logo">
      <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use></svg>
    </div>
    <div class="loginContent">
      <div class="logSwitch">
        <router-link class="messagein" to="/login/messagein" active-class="loginActive">短信登录</router-link>
        <router-link class="passin" to="/login/passin" active-class="loginActive">密码登录</router-link>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
.login{
  background-color: #fff;
  .logo{
    text-align: center;
    padding-top: 40px;
    svg{
      width: 140px;
      height: 56px;
    }
  }
  .loginContent{
    .logSwitch{
      display: flex;
      align-items: center;
      margin-top: 40px;
      .passin,.messagein{
        display: inline-block;
        padding-bottom: 0.633333vw;
        font-size: 14px;
        font-weight: 700;
        color: #000;
        &.loginActive{
          color: #2395ff;
          border-bottom: 2px solid #2395ff;
        }
      }
      .messagein{
        text-align: right;
        margin: 0 5vw 0 30vw;
      }
      .passin{
        margin: 0 30vw 0 5vw;
      }
    }
  }
}
</style>
