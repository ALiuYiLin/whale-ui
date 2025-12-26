<script lang="ts" setup>
import { WlFlex } from 'whale-ui'
</script>
<template>
  <div class="w-full">
    <wl-flex gap="small" justify="start" class="w-full">
      <div class="bg-gray-200 text-center min-w-[120px]">start</div>
      <div class="bg-gray-200 text-center min-w-[120px]">start</div>
    </wl-flex>
    <wl-flex gap="small" justify="center" class="w-full mt-4">
      <div class="bg-gray-200 text-center min-w-[120px]">center</div>
      <div class="bg-gray-200 text-center min-w-[120px]">center</div>
    </wl-flex>
    <wl-flex gap="small" justify="end" class="w-full mt-4">
      <div class="bg-gray-200 text-center min-w-[120px]">end</div>
      <div class="bg-gray-200 text-center min-w-[120px]">end</div>
    </wl-flex>
    <wl-flex gap="small" justify="between" class="w-full mt-4">
      <div class="bg-gray-200 text-center min-w-[120px]">between</div>
      <div class="bg-gray-200 text-center min-w-[120px]">between</div>
    </wl-flex>
    <wl-flex gap="small" justify="around" class="w-full mt-4">
      <div class="bg-gray-200 text-center min-w-[120px]">around</div>
      <div class="bg-gray-200 text-center min-w-[120px]">around</div>
    </wl-flex>
    <wl-flex gap="small" justify="evenly" class="w-full mt-4">
      <div class="bg-gray-200 text-center min-w-[120px]">evenly</div>
      <div class="bg-gray-200 text-center min-w-[120px]">evenly</div>
    </wl-flex>
  </div>
</template>
