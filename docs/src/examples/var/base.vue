<template>
  <div class="css-var-example">
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script lang="ts" setup>
import { cssConfig } from 'whale-ui';
</script>

<style scoped>
.css-var-example{
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.box{
  width: 120px;
  height: 120px;
}
.box:nth-child(1){
  background-color: v-bind('cssConfig.color.primary.default');
}
.box:nth-child(2){
  background-color: v-bind('cssConfig.color.warning.default');
}
</style>