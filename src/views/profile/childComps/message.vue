<template>
  <div class="message">
    <div class="denglu">
      <img src="~assets/img/profile/登 录.svg" alt="" @click="proClick" />
    </div>
    <profile-message>
      <span slot="left">
        <img src="~assets/img/profile/我的-消息中心.svg" alt="" />
      </span>
      <div slot="right" class="text">我的消息</div>
    </profile-message>
    <profile-message style="margin-top: 8px;">
      <span slot="left">
        <img src="~assets/img/profile/积分商城.svg" alt="" />
      </span>
      <div slot="right" class="text">积分商城</div>
    </profile-message>
    <profile-message style="margin-top: 8px;">
      <span slot="left">
        <img src="~assets/img/profile/会员卡购买.svg" alt="" />
      </span>
      <div slot="right" class="text">会员卡</div>
    </profile-message>
    <div class="divider"></div>
    <profile-message>
      <span slot="left">
        <img src="~assets/img/profile/我的购物车.svg" alt="" />
      </span>
      <div slot="right" class="text">我的购物车</div>
    </profile-message>
    <profile-message style="margin-top: 8px;">
      <span slot="left">
        <img src="~assets/img/profile/下载.svg" alt="" />
      </span>
      <div slot="right" class="text">下载购物App</div>
    </profile-message>
  </div>
</template>

<script>
import ProfileMessage from "./ProfileMessage";
export default {
  name: "message",
  components: {
    ProfileMessage
  },
  methods: {
    proClick() {
      this.$router.push("/thelogin");
    }
  }
};
</script>

<style scoped>
img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-right: 10px;
}
.text {
  display: inline-block;
  width: calc(100vw - 40px);
  padding-bottom: 10px;
  border-bottom: 1px solid #eeeeee;
  font-size: 10px;
}
/* .vip {
    border-bottom: 10px solid #eeeeee;
  } */
.divider {
  margin-top: 5px;
  height: 15px;
  background-color: #eeeeee;
}

.denglu img {
  width: 50px;
  height: 50px;
}
</style>
