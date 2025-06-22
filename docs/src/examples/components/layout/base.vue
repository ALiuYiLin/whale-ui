<template>
  <wl-row>
    <wl-col :span="24"><div class="grid-content" /></wl-col>
  </wl-row>
  <wl-row>
    <wl-col :span="12"><div class="grid-content" /></wl-col>
    <wl-col :span="12"><div class="grid-content" /></wl-col>
  </wl-row>
  <wl-row>
    <wl-col :span="8"><div class="grid-content" /></wl-col>
    <wl-col :span="8"><div class="grid-content" /></wl-col>
    <wl-col :span="8"><div class="grid-content" /></wl-col>
  </wl-row>
  <wl-row>
    <wl-col :span="6"><div class="grid-content" /></wl-col>
    <wl-col :span="6"><div class="grid-content" /></wl-col>
    <wl-col :span="6"><div class="grid-content" /></wl-col>
    <wl-col :span="6"><div class="grid-content" /></wl-col>
  </wl-row>
  <wl-row>
    <wl-col :span="4"><div class="grid-content" /></wl-col>
    <wl-col :span="4"><div class="grid-content" /></wl-col>
    <wl-col :span="4"><div class="grid-content" /></wl-col>
    <wl-col :span="4"><div class="grid-content" /></wl-col>
    <wl-col :span="4"><div class="grid-content" /></wl-col>
    <wl-col :span="4"><div class="grid-content" /></wl-col>
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
.wl-col{
  border-radius: 4px;
}

.wl-row .wl-col:nth-child(2n+1) {
  background: #d3dce6;
}
.wl-row .wl-col:nth-child(2n) {
  background: #e5e9f2;
}
</style>