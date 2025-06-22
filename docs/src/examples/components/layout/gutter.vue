<template>
  <wl-row :gutter="20">
    <wl-col :span="6"><div class="grid-content" /></wl-col>
    <wl-col :span="6"><div class="grid-content" /></wl-col>
    <wl-col :span="6"><div class="grid-content" /></wl-col>
    <wl-col :span="6"><div class="grid-content" /></wl-col>
  </wl-row>
</template>

<script lang="ts" setup>
import { WlRow,WlCol } from 'whale-ui';
</script>

<style scoped>
.wl-row{
  margin-bottom: 20px;
}
.wl-col > div {
  min-height: 36px;
}
.wl-col div{
  border-radius: 4px;
}

.wl-row .wl-col:nth-child(2n+1) div{
  background: #d3dce6;
}
.wl-row .wl-col:nth-child(2n) div{
  background: #e5e9f2;
}
</style>