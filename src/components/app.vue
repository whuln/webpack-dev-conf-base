<template>
  <div class="app">
      <div id=map></div>
      {{msg}}
      
    </div>
</template>   
<script>
export default {
  data() {
    return {
      msg: "Hello from vue-loader,dgdf"
    };
  }
};
</script>
<style lang="scss">
.app {
  width: 100%;
  height: 100%;
  background-color: black;

  #map {
    width: 100%;
    height: 50%;
    background-color: rgb(238, 38, 38);
  }
}
</style>