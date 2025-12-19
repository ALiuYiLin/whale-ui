<script lang="ts" setup>
import { WlRow, WlCol } from 'whale-ui'
</script>
<template>
  <wl-row :gutter="[12, 8]">
    <wl-col :span="12" v-for="i in 2">
      <div class="bg-gray-200 text-center">12</div>
    </wl-col>
    <wl-col :span="6"  v-for="i in 4">
      <div class="bg-gray-200 text-center">6</div>
    </wl-col>
    <wl-col :span="4"  v-for="i in 6">
      <div class="bg-gray-200 text-center">4</div>
    </wl-col>
  </wl-row>
</template>