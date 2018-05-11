<template>
  <div class="mainContent">
    <section class="phone">
      <input type="tel" placeholder="手机/邮箱/用户名" value="">
    </section>
    <section class="phone">
      <input type="password" placeholder="密码" value="">
    </section>
    <section class="login">
      <button>登录</button>
    </section>
    <p class="about">关于我们</p>
  </div>
</template>

<script>
export default {
  name: 'PassLogin'
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
