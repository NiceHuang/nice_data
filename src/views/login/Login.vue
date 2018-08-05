<template>
  <div id="login">
    <el-form :model="loginForm" class="login-form" :rules="loginFormRules" ref="loginForm" >
      <h2 style="color: white">系统登录</h2>
      <el-form-item prop="name">
        <el-input v-model="loginForm.name" prefix-icon="fa fa-user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" prefix-icon="fa fa-lock" placeholder="密码">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;margin-bottom:30px;">登录</el-button>
        <div style="float: right;color: white">还没有账号，<a href="#">立即注册</a></div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: "Login",
    data() {
      const validateName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        } else {
          if (this.loginForm.name !== '') {
            this.$refs.validateName.validateField('name');
          }
          callback();
        }
      };
      const validatePassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'));
        } else {
          if (this.loginForm.password !== '') {
            this.$refs.validatePassword.validateField('password');
          }
          callback();
        }
      };
      return {
        loginForm: {
          name: "",
          password: ""
        },
        loginFormRules:{
          name: [{validator: validateName, trigger: 'blur'}],
          password: [{validator: validatePassword, trigger: 'blur'}]
        }
      }
    },
    methods: {},

  }
</script>
<style scoped>
  #login {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #2d3a4b;
    /*background-image: url('../../assets/img/login.jpg');*/
  }

  .login-form {
    width: 420px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 120px auto;
    padding: 35px 35px 15px 35px;
  }
</style>
