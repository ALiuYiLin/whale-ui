<script lang="ts" setup>
import { WlTooltip, WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex vertical gap="small" align="center">
    <wl-flex gap="small" justify="center" class="w-full">
      <wl-tooltip content="topLeft" placement="topLeft"><button class="px-2 py-1 border border-solid border-indigo-500 rounded">topLeft</button></wl-tooltip>
      <wl-tooltip content="top" placement="top"><button class="px-2 py-1 border border-solid border-indigo-500 rounded">top</button></wl-tooltip>
      <wl-tooltip content="topRight" placement="topRight"><button class="px-2 py-1 border border-solid border-indigo-500 rounded">topRight</button></wl-tooltip>
    </wl-flex>

    <wl-flex gap="small" justify="between" class="w-full">
      <wl-tooltip content="leftTop" placement="leftTop"><button class="px-2 py-1 border border-solid border-indigo-500 rounded">leftTop</button></wl-tooltip>
      <div class="flex-1"></div>
      <wl-tooltip content="rightTop" placement="rightTop"><button class="px-2 py-1 border border-solid border-indigo-500 rounded">rightTop</button></wl-tooltip>
    </wl-flex>

    <wl-flex gap="small" justify="between" class="w-full">
      <wl-tooltip content="left" placement="left"><button class="px-2 py-1 border border-solid border-indigo-500 rounded">left</button></wl-tooltip>
      <div class="flex-1"></div>
      <wl-tooltip content="right" placement="right"><button class="px-2 py-1 border border-solid border-indigo-500 rounded">right</button></wl-tooltip>
    </wl-flex>

    <wl-flex gap="small" justify="between" class="w-full">
      <wl-tooltip content="leftBottom" placement="leftBottom"><button class="px-2 py-1 border border-solid border-indigo-500 rounded">leftBottom</button></wl-tooltip>
      <div class="flex-1"></div>
      <wl-tooltip content="rightBottom" placement="rightBottom"><button class="px-2 py-1 border border-solid border-indigo-500 rounded">rightBottom</button></wl-tooltip>
    </wl-flex>

    <wl-flex gap="small" justify="center" class="w-full">
      <wl-tooltip content="bottomLeft" placement="bottomLeft"><button class="px-2 py-1 border border-solid border-indigo-500 rounded">bottomLeft</button></wl-tooltip>
      <wl-tooltip content="bottom" placement="bottom"><button class="px-2 py-1 border border-solid border-indigo-500 rounded">bottom</button></wl-tooltip>
      <wl-tooltip content="bottomRight" placement="bottomRight"><button class="px-2 py-1 border border-solid border-indigo-500 rounded">bottomRight</button></wl-tooltip>
    </wl-flex>
  </wl-flex>
</template>
