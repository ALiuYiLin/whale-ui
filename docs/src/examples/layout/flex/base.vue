<script lang="ts" setup>
  import { WlFlex } from 'whale-ui'
</script>
<template>
  <div>
    <wl-flex vertical gap="small">
      <div class="bg-gray-200 text-center min-w-[150px]">item</div>
      <div class="bg-gray-200 text-center min-w-[150px]" >item</div>
      <wl-flex  gap="small">
        <div class="bg-gray-200 text-center min-w-[150px]">item</div>
        <div class="bg-gray-200 text-center min-w-[150px]" >item</div>
        <div class="bg-gray-200 text-center min-w-[150px]" >item</div>
        <div class="bg-gray-200 text-center min-w-[150px]" >item</div>
      </wl-flex>


      <wl-flex  gap="small" justify="start" class="w-full">
        <div class="bg-gray-200 text-center min-w-[150px]">justify-start</div>
        <div class="bg-gray-200 text-center min-w-[150px]">justify-start</div>
      </wl-flex>


      <wl-flex  gap="small" justify="center" class="w-full">
        <div class="bg-gray-200 text-center min-w-[150px]">justify-center</div>
        <div class="bg-gray-200 text-center min-w-[150px]">justify-center</div>
      </wl-flex>


      <wl-flex  gap="small" justify="end" class="w-full">
        <div class="bg-gray-200 text-center min-w-[150px]">justify-end</div>
        <div class="bg-gray-200 text-center min-w-[150px]">justify-end</div>
      </wl-flex>

      <wl-flex  gap="small" justify="between" class="w-full">
        <div class="bg-gray-200 text-center min-w-[150px]">justify-between</div>
        <div class="bg-gray-200 text-center min-w-[150px]">justify-between</div>
      </wl-flex>


      <wl-flex  gap="small" justify="around" class="w-full">
        <div class="bg-gray-200 text-center min-w-[150px]">justify-around</div>
        <div class="bg-gray-200 text-center min-w-[150px]">justify-around</div>
      </wl-flex>

      <wl-flex  gap="small" justify="evenly" class="w-full">
        <div class="bg-gray-200 text-center min-w-[150px]">justify-evenly</div>
        <div class="bg-gray-200 text-center min-w-[150px]">justify-evenly</div>
      </wl-flex>
    </wl-flex>
  </div>
</template>