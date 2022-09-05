<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="@/assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
/* .check-button {
    background-color: red;
    border-radius: 50%;
    border: 2px solid #aaa;
} */

.check-button {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border: 2px solid #c0c0c0;
  vertical-align: middle;
  margin-bottom: 6px;
}

.check {
  border: 2px solid var(--color-tint) !important;
  background-color: var(--color-tint);
}

/* .check {
    border-color: red;
    background-color: red;
} */
</style>
