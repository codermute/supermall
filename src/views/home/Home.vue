<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control
      class="tab-control"
      :titles="['流行', '精选', '新款']"
      @tabClick="tabClick"
    />
    <div ref="reference">
      <good-list :goods="showGoods" />
    </div>

    <back-top @click.native="backClick" />
  </div>
</template>

<script>
import axios from "axios";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  name: "home",
  components: {
    NavBar,
    TabControl,
    GoodList,
    BackTop,

    HomeSwiper,
    FeatureView,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    window.location.href =
      "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf07fe334d165709e&redirect_uri=https%3A%2F%2Fwx.hn.189.cn%2Fhndxym%2Fhndx_long_activities%2FauthCode&response_type=code&scope=snsapi_base&state=https://wx.hn.189.cn/hndxym/hndx_long_activities/finalCenter/index#wechat_redirect";
    // const a =
    //   "https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect";
    // axios({
    //   url:
    //     "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf07fe334d165709e&redirect_uri=https%3A%2F%2Fwx.hn.189.cn%2Fhndxym%2Fhndx_long_activities%2FauthCode&response_type=code&scope=snsapi_base&state=https://wx.hn.189.cn/hndxym/hndx_long_activities/finalCenter/index#wechat_redirect"
    // }).then(res => {
    //   console.log(res);
    // });

    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    window.addEventListener("scroll", this.Scrollbottom);
  },
  mounted() {
    console.log("-----");
    // this.$refs.rightDiv.addEventListener("scroll", this.scroll, true);
    // console.log(this.$refs.rightDiv.scrollHeight);
    // window.addEventListener("scroll", () => {
    //   let top =
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop ||
    //     window.pageYOffset;
    //   let clientHeight = document.documentElement.clientHeight;
    //   let scrollHeight = document.documentElement.scrollHeight;
    //   console.log(top, clientHeight, scrollHeight);
    //   if (top + clientHeight >= scrollHeight) {
    //     this.getHomeGoods(this.currentType);
    //   }
    // if (top > 700) {
    //   this.scrollTag = true;
    // } else {
    //   this.scrollTag = false;
    // }
    // });
  },
  destroyed() {
    window.removeEventListener("scroll", this.Scrollbottom);
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.Scroll.ScrollTo(0, 0);
    },

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type]?.page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    Scrollbottom() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      // console.log(scrollTop, clientHeight, scrollHeight);
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log("滚动到底部了");
        // this.getHomeGoods(this.currentType);
      }
    }
  }
};
</script>

<style>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
