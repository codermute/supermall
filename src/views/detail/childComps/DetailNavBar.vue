<template>
  <div id="detailNavBar">
    <nav-bar>
      <div slot="left" class="back" @click="backClack">
        <img src="@/assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClack(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClack(index) {
      this.currentIndex = index;
    },
    backClack() {
      this.$router.back();
    }
  }
};
</script>

<style>
.title {
  display: flex;
  font-size: 13px;
  /* margin-left: 1px; */
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.back img {
  margin-top: 12px;
}
</style>
