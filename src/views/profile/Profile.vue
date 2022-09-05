<template>
  <div class="profile">
    <message />
  </div>
</template>

<script>
import Message from "./childComps/message";

export default {
  name: "Profile",
  components: {
    Message
  }
};
</script>

<style scoped>
.profile {
  padding-top: 14px;
}
</style>
