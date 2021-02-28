<template>
  <div id="detail">
      <detail-nav-bar/>
      <!-- <ul>
          <li v-for="(item, index) in $store.state.cartList" :key="index">
              {{item}}
          </li>
      </ul> -->
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-bottom-bar @addCart="addToCart"/>
      <toast :message="message" :show="show"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailBottomBar from'./childComps/DetailBottomBar'

import { getDetail, Goods, Shop } from '@/network/detail';
import { mapActions } from 'vuex'

import Toast from '@/components/common/toast/Toast'

export default {
    name: "Detail",
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailBottomBar,
        Toast
    },
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            message: '',
            show: false     
        }
    },
    created() {
        // console.log(this.$route.params)
        //1.保存传入的iid
       this.iid = this.$route.params.iid
        this.$nextTick( () => {
            //2.根据iid请求数据
                getDetail(this.iid).then(res => {
                    console.log(res)
                        //3.获取轮播图
                const data = res.result;
                    //    console.log(res);
                this.topImages = data.itemInfo.topImages
                        //获取商品信息
                 this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                        //创建店铺信息
                this.shop = new Shop(data.shopInfo)
                    })
        })
        
             
    },
    methods: {
          ...mapActions(['addCart']),
        addToCart() {
            //1.获取购物需要展示的信息
            const product = {}
            product.image = this.topImages[0];
            product.title = this.goods.title;
             product.price = this.goods.realPrice;
             product.iid = this.iid;

             //2.将商品添加到购物车
            // this.$store.commit('addCart', product)
              this.addCart(product).then(res => {
                this.show = true;
                this.message = res;

                setTimeout(() => {
                    this.show = false;
                    this.message = ''
                },1500)
            })

            // this.$store.dispatch('addCart', product).then(res => {
            //     console.log(res);
            // })

            //3.添加到购物车成功

            // this.$store.dispatch('addCart', product)
        }
    }
}
</script>
                                                                                                                                                                                                                                                                                                                                                                            
<style>
    #detail {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
</style>