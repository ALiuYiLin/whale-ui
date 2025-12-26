<script lang="ts" setup>
import { WlTooltip, WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" align="center">
    <wl-tooltip placement="bottom">
      <button class="px-2 py-1 border border-solid border-indigo-500 rounded">custom slot</button>
      <template #content>
        <div class="flex items-center space-x-2">
          <span class="inline-block w-2 h-2 rounded-full bg-green-500"></span>
          <span>操作成功</span>
        </div>
      </template>
    </wl-tooltip>
  </wl-flex>
</template>
