<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="cart-botton"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>

    <div class="price">合计: {{ totalPrice }}</div>

    <div class="calculate">去计算: ({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";

export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "¥" +
        this.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find(item => !item.checked);
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        //全部选中
        this.cartList.forEach(item => (item.checked = false));
      } else {
        //部分或全部不选中
        this.cartList.forEach(item => (item.checked = true));
      }

      // this.cartList.forEach(item => item.checked = !true.isSelectAll)
    }
  }
};
</script>

<style>
.bottom-bar {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 49px;
  background: #eee;
  display: flex;
  line-height: 40px;
  /* text-align: center; */
  z-index: 99;
  font-size: 14px;
}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.cart-botton {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}

.price {
  margin-left: 20px;
  /* margin-top: 4px; */
  flex: 1;
}

.calculate {
  width: 90px;
  background: red;
  color: #fff;
  text-align: center;
}
</style>
