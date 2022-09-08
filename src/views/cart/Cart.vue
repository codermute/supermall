<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车({{ Length }})</div>
    </nav-bar>

    <!--商品列表-->
    <cart-list />

    <!--底部汇总-->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";

export default {
  components: { NavBar, CartList, CartBottomBar },

  computed: {
    ...mapGetters({
      Length: "cartLength"
    })
  }
};
</script>
