<template>
  <div class="demo-border-radius">
    <div class="demo-item">No Radius</div>
    <div class="demo-item">Small Radius</div>
    <div class="demo-item">Large Radius</div>
    <div class="demo-item">Round Radius</div>
  </div>
</template>
<script lang="ts" setup>
import { cssConfig } from 'whale-ui';

</script>
<style scoped>
.demo-border-radius{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.demo-item{
  padding: 10px;
  border: 1px solid v-bind('cssConfig.border.color.default');
}
.demo-item:nth-child(2){
  border-radius: v-bind('cssConfig.border.radius.base');
}
.demo-item:nth-child(3){
  border-radius: v-bind('cssConfig.border.radius.small');
}
.demo-item:nth-child(4){
  border-radius: v-bind('cssConfig.border.radius.round');
}
</style>
