<template>
  <div class="demo-border-shadow">
    <div class="demo-item"><p>defualt</p></div>
    <div class="demo-item"><p>light</p></div>
    <div class="demo-item"><p>lighter</p></div>
    <div class="demo-item"><p>dark</p></div>
  </div>
</template>
<script lang="ts" setup>
import { cssConfig } from 'whale-ui';

</script>
<style scoped>
.demo-border-shadow{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.demo-item{
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
}
.demo-item:nth-child(1){
  box-shadow: v-bind('cssConfig.box.shadow.default');
}
.demo-item:nth-child(2){
  box-shadow: v-bind('cssConfig.box.shadow.light');
}
.demo-item:nth-child(3){
  box-shadow: v-bind('cssConfig.box.shadow.lighter');
}
.demo-item:nth-child(4){
  box-shadow: v-bind('cssConfig.box.shadow.dark');
}
</style>
