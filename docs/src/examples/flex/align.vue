<script lang="ts" setup>
import { WlFlex } from 'whale-ui'
</script>
<template>
  <div class="w-full">
    <wl-flex gap="small" align="start" class="w-full h-24 bg-gray-100">
      <div class="bg-gray-200 text-center min-w-[120px] h-6">start</div>
      <div class="bg-gray-200 text-center min-w-[120px] h-12">start</div>
    </wl-flex>
    <wl-flex gap="small" align="center" class="w-full h-24 bg-gray-100 mt-4">
      <div class="bg-gray-200 text-center min-w-[120px] h-6">center</div>
      <div class="bg-gray-200 text-center min-w-[120px] h-12">center</div>
    </wl-flex>
    <wl-flex gap="small" align="end" class="w-full h-24 bg-gray-100 mt-4">
      <div class="bg-gray-200 text-center min-w-[120px] h-6">end</div>
      <div class="bg-gray-200 text-center min-w-[120px] h-12">end</div>
    </wl-flex>
    <wl-flex gap="small" align="baseline" class="w-full h-24 bg-gray-100 mt-4">
      <div class="bg-gray-200 text-center min-w-[120px] text-lg">baseline</div>
      <div class="bg-gray-200 text-center min-w-[120px] text-sm">baseline</div>
    </wl-flex>
    <wl-flex gap="small" align="stretch" class="w-full h-24 bg-gray-100 mt-4">
      <div class="bg-gray-200 text-center min-w-[120px]">stretch</div>
      <div class="bg-gray-200 text-center min-w-[120px]">stretch</div>
    </wl-flex>
  </div>
</template>
