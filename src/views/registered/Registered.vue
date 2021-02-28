<template>
    <div class='gcs-login1'>
   
   <div class="gcs-login-panel1">
    <registered-nav-bar/>
    <div class="login-title1">
      <h2>用户注册</h2>
    </div>
    <div class="gcs-login-container1">
        <input type="text" class="input1" placeholder="请输入用户名" v-model.trim.lazy="name1"/>
    </div>
    <div class="gcs-login-container1">
        <input type="password"  class="input1" placeholder="请输入密码" v-model.trim.lazy="password1"/>
    </div>
 
    <div class="gcs-login-container">
        <input type="button" value="立即注册" class="btn-login1" @click="teredClick" :disabled="delu1"/>
    </div>
    </div>
    </div>

</template>

<script>
import RegisteredNavBar from './childComps/RegisteredNavBar'

export default {
  components: {
   RegisteredNavBar,
  },
  data() {
    return {
      name1: '',
      password1: '',
      delu1: true
    }
  },
  methods: { 
    teredClick () {
      this.$router.push('/thelogin')
    },
    regisz() {
      if ((this.name1 != '') && (this.password1 != '')) {
        this.delu1 = false;
        return
      }
      this.delu1 = true;
    }
  },
  watch: {
    name1: function(){
      this.regisz();
    },
    password1: function(){
      this.regisz();
    }
  },
}
</script>

<style>
  .gcs-login1 {

  position: absolute;
  right: 0px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #E6E6E6;
  z-index: 100;

}

.gcs-login1 .gcs-login-panel1{
 height: 360px;
  position:absolute;
  margin:auto;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;

}

.gcs-login1 .login-title1 {
  text-align: center;
  color: rgb(208,208,208);

}

.gcs-login1 .login-title1 h2 {
 letter-spacing: 8px;

}

.gcs-login-container1 {
  width: 100%;
  box-sizing: border-box;
  width: 100%;
  margin: 20px 0 0;
  text-align: center;

}

.gcs-login1 .input1 {
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


.gcs-login1 .validation-input1{
  position: absolute;
  width: 250px;
  left: 0px;

}



.gcs-login1 .input1:focus {
  outline: none;
  border: 1px solid #62a8ea;

}

.gcs-login1 .btn-login1 {
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

.gcs-login1 .btn-login1:hover{
  opacity: 0.9;

}
  
</style>