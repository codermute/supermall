<template>
  <div class="category">
    <nav-bar class="catenavbar">
      <div slot="center" class="xiaoxi">消息</div>
    </nav-bar>
    <div class="bottomz">
      <div class="profilez">   
      <div slot="right" class="text"><a href="">好友信息</a></div>
    </div>
    <div class="profilez" style="margin-top: 8px;"> 
      <div slot="right" class="text"><a href="">群组</a></div>
    </div>
    <div class="profilez" style="margin-top: 8px;">
      
      <div class="text"><a href="">附近的人</a></div>
    </div>
    <div class="profilez">
      
      <div class="text"><a href="">评论</a></div>
    </div>
    <div class="profilez" style="margin-top: 8px;">
      <div class="text"><a href="">好友申请</a></div>
    </div>
    </div> 
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style>

  .profilez {
    height: 40px;
    /*line-height: 40px;*/
    font-size: 20px;
    padding: 10px 0;
  }
  .xiaoxi {
    font-size: 17px;
    /* margin-left: 7px;
    display: flex; */
  
  }
  .catenavbar {
    background-color: var(--color-tint);
  color: #fff;
  
  }

.text {
    display: inline-block;
    width: calc(100vw - 40px);
    height: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid  #eeeeee;
    font-size: 15px;
  }
  
  .divider {
    margin-top: 5px;
    height: 15px;
    /* background-color: #eeeeee; */
  }

  .bottomz {
    margin-top: 20px;
  }
</style>