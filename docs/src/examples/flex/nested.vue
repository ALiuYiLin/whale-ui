<script lang="ts" setup>
import { WlFlex } from 'whale-ui'
</script>
<template>
  <div>
    <wl-flex gap="small" class="w-full">
      <div class="bg-gray-200 text-center min-w-[120px]">A</div>
      <wl-flex gap="small">
        <div class="bg-gray-200 text-center min-w-[120px]">B1</div>
        <div class="bg-gray-200 text-center min-w-[120px]">B2</div>
        <div class="bg-gray-200 text-center min-w-[120px]">B3</div>
      </wl-flex>
      <div class="bg-gray-200 text-center min-w-[120px]">C</div>
    </wl-flex>
  </div>
</template>
