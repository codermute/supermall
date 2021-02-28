<template>
<div>
   <nav-bar class="zujian">
      <div slot="center">购物车({{Length}})</div>
   </nav-bar>

   <!-- <nav-bar class="zujian"> 
      <div slot="center" class="slot">购物车({{Length}})</div>
   </nav-bar> -->
   <!--商品列表-->
   <cart-list/>                  

   <!--底部汇总-->
   <cart-bottom-bar/>
</div>
</template>

<script>
   // import NavBar from '@/components/common/navbar/NavBar'
   import NavBar from '../../components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'



export default {
  components: { NavBar, CartList, CartBottomBar },
  
   // compontents: {
   //    NavBar,
      
   // }, 

   computed: {
      ...mapGetters({
        Length: 'cartLength',
      })
   }     
   }

</script>

<style>
   .zujian {
      background-color: var(--color-tint);
      color: #fff;
    /* position: absolute; */
   }
   /* .slot {     
      text-align: center;
      margin: 0 auto;
    /* }   */
</style>