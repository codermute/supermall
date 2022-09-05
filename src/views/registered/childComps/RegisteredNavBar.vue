<template>
  <div id="RegisteredNavBar">
    <div class="regisback" @click="RegisClick">
      <img src="@/assets/img/common/back.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisteredNavBar",
  components: {},
  methods: {
    RegisClick() {
      this.$router.back();
    }
  }
};
</script>

<style>
#RegisteredNavBar {
  background-color: rgb(208, 208, 208);
  height: 40px;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.regisback img {
  margin-top: 12px;
}
</style>
