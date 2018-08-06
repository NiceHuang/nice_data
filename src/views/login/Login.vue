<template>
  <div class="login">
    <div class="login-panel" v-show="showLogin">
      <el-form :model="loginForm" class="login-form" :rules="loginFormRules" ref="loginForm" >
        <h2 style="color: white">系统登录</h2>
        <el-form-item prop="name">
          <el-input v-model="loginForm.name" prefix-icon="fa fa-user" placeholder="用户名" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="fa fa-lock" placeholder="密码" :type="loginPasswordType">
            <i slot="suffix" :class="{'fa': true, 'fa-eye': loginPasswordType=='password','fa-eye-slash': loginPasswordType!='password'}"
               style="padding: 0 8px;cursor: pointer" @click="showLoginPassword"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;margin-bottom:30px;" @click="handleLogin">登录</el-button>
          <div style="float: right;color: white">还没有账号，<el-button type="text" @click="showLogin=false">立即注册</el-button></div>
        </el-form-item>
      </el-form>
    </div>
    <div class="register-panel" v-show="!showLogin">
      <el-form :model="registerForm" class="login-form" :rules="registerFormRules" ref="registerForm" >
        <h2 style="color: white">注册账号</h2>
        <el-form-item prop="name">
          <el-input v-model="registerForm.name" prefix-icon="fa fa-user" placeholder="用户名" clearable></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="registerForm.email" prefix-icon="fa fa-envelope" placeholder="邮箱" type="email" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="registerForm.password" prefix-icon="fa fa-lock" placeholder="密码" :type="registerPasswordType">
            <i slot="suffix" :class="{'fa': true, 'fa-eye': loginPasswordType=='password','fa-eye-slash': registerPasswordType!='password'}"
               style="padding: 0 8px;cursor: pointer" @click="showRegisterPassword"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;margin-bottom:30px;">注册</el-button>
          <div style="float: right;color: white">已有账号，<el-button type="text" @click="showLogin=true">立即登录</el-button></div>
        </el-form-item>
      </el-form>
    </div>
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
          callback();
        }
      };
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          return callback(new Error('密码不能小于6位'));
        } else {
          callback();
        }
      };
      const validateRegisterName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        } else {
          callback();
        }
      };
      const validateRegisterPassword = (rule, value, callback) => {
        if (value.length < 6) {
          return callback(new Error('密码不能小于6位'));
        } else {
          callback();
        }
      };
      const validateRegisterEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        } else {
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
        },
        showLogin: true,
        loginPasswordType: "password",
        registerPasswordType: "password",
        registerForm: {
          name: "",
          email: "",
          password: ""
        },
        registerFormRules: {
          name: [{validator: validateRegisterName, trigger: 'blur'}],
          email: [{validator: validateRegisterEmail, trigger: 'blur'}],
          password: [{validator: validateRegisterPassword, trigger: 'blur'}]
        }
      }
    },
    watch: {
      showLogin(){
          if (this.$refs.loginForm){
            this.$refs.loginForm.clearValidate();
          }
        if (this.$refs.registerForm){
          this.$refs.registerForm.clearValidate();
        }
      }
    },
    methods: {
      showLoginPassword(){
        this.loginPasswordType = this.loginPasswordType == "password" ? "" : "password";
      },
      showRegisterPassword(){
        this.registerPasswordType = this.registerPasswordType == "password" ? "" : "password";
      },
      handleLogin(){
      }
    },

  }
</script>
<style scoped>
  .login {
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
