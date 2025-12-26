<script lang="ts" setup>
import { WlFlex } from 'whale-ui'
</script>
<template>
  <div>
    <wl-flex gap="small" class="w-full">
      <div class="bg-gray-200 text-center min-w-[120px]">item</div>
      <div class="bg-gray-200 text-center min-w-[120px]">item</div>
      <div class="bg-gray-200 text-center min-w-[120px]">item</div>
    </wl-flex>
    <wl-flex vertical gap="small" class="mt-4">
      <div class="bg-gray-200 text-center min-w-[120px]">vertical</div>
      <div class="bg-gray-200 text-center min-w-[120px]">vertical</div>
      <div class="bg-gray-200 text-center min-w-[120px]">vertical</div>
    </wl-flex>
  </div>
</template>
