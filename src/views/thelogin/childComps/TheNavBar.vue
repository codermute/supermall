<template>
  <div id="TheNavBar">
        <div class="back" @click="backClack">
          <img src="@/assets/img/common/back.svg" alt="">  
        </div> 
  </div>
</template>

<script>

export default {
    name: "TheNavBar",
     components: {
         
    },
    methods: {
      backClack() {
        this.$router.back()
      }
    }

}
</script>

<style>
    #TheNavBar {
       background-color: rgb(208,208,208);
    height: 40px;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; 
    }
  .back img{
    margin-top: 12px;
  }
</style>