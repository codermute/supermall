<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/img/tabbar/首页.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/首页_active.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/img/tabbar/消 息.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/消 息_active.svg"
        alt=""
      />
      <div slot="item-text">消息</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/img/tabbar/购物车.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/购物车_active.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/img/tabbar/我的.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/我的_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style></style>
