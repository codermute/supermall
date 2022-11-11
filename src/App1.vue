<template>
  <div id="app1">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <!-- <router-link to="" exclude="Detail"/> -->
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";

export default {
  name: "App1",
  components: {
    MainTabBar
  }
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
