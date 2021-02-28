<template>
    <div class='gcs-login'>
   
   <div class="gcs-login-panel">
    <the-nav-bar/>
    <div class="login-title">
      <h2>用户登陆</h2>
    </div>
    <div class="gcs-login-container">
        <input type="text" class="input" placeholder="请输入用户名" v-model.trim.lazy="name" />
    </div>
    <div class="gcs-login-container">
        <input type="password"  class="input" placeholder="请输入密码" v-model.trim.lazy="password"/>
    </div><br/>
    <!-- <div class="gcs-login-container"> -->
    <div class="gcs-login-validation" @click="loginClick">
       
    <p>立即注册</p>
    </div>
        <!-- <br /><br /> -->
    <div class="gcs-login-container">
        <input type="button" value="立即登录" class="btn-login" @click="theClick" :disabled="delu"/>
    </div>
    </div>
    </div>

</template>

<script>
import TheNavBar from './childComps/TheNavBar'

export default {
  data() {
    return {
      name: '',
      password: '',
      delu: true
    }
  },
  components: {
    TheNavBar,
  },
  methods: { 
    theClick () {
      this.$router.push('/home')
    },
    loginClick() {
      this.$router.push('/registered')
    },
    loginz() {
      if ((this.name != '') && (this.password != '')) {
        this.delu = false;
        return
      }
      this.delu = true;
    }
  },
  watch: {
    name: function(){
      this.loginz();
    },
    password: function(){
      this.loginz();
    }
  }

}
</script>

<style>
  .gcs-login {

  position: absolute;
  right: 0px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #E6E6E6;
  z-index: 100;

}

.gcs-login .gcs-login-panel{
 height: 360px;
  position:absolute;
  margin:auto;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;

}

.gcs-login .login-title {
  text-align: center;
  color: rgb(208,208,208);

}

.gcs-login .login-title h2 {
 letter-spacing: 8px;

}

.gcs-login-container {
  /* width: 100%; */
  box-sizing: border-box;
  width: 100%;
  margin: 20px 0 0;
  text-align: center;

}

.gcs-login .input {
  border: 1px solid white;
  display: inline-block;
  box-sizing: border-box;
  width: 80%;
  height: 46px;
  padding-left: 10px;
  margin: 0 auto;
  font-size: 14px;
  outline: none;
  color:  #76838f;

}
.gcs-login .gcs-login-validation{
  width: 80%;
  margin: 0 auto;
  position: relative;

}

.gcs-login .validation-input{
  position: absolute;
  width: 250px;
  left: 0px;

}


.gcs-login .input:focus {
  outline: none;
  border: 1px solid #62a8ea;

}

.gcs-login .btn-login {
  background-color:rgb(208,208,208);
 border: none;
  width: 80%;
  height: 45px;
  line-height: 45px;
  color:#404040;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

}

.gcs-login .btn-login:hover{
  opacity: 0.9;

}
  
</style>