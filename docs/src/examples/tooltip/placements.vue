<script lang="ts" setup>
import { WlTooltip } from 'whale-ui'
</script>
<template>
  <div class="grid grid-cols-3 gap-4 items-center">
    <wl-tooltip content="topLeft" placement="topLeft"><button class="px-2 py-1 border rounded">topLeft</button></wl-tooltip>
    <wl-tooltip content="top" placement="top"><button class="px-2 py-1 border rounded">top</button></wl-tooltip>
    <wl-tooltip content="topRight" placement="topRight"><button class="px-2 py-1 border rounded">topRight</button></wl-tooltip>

    <wl-tooltip content="leftTop" placement="leftTop"><button class="px-2 py-1 border rounded">leftTop</button></wl-tooltip>
    <div></div>
    <wl-tooltip content="rightTop" placement="rightTop"><button class="px-2 py-1 border rounded">rightTop</button></wl-tooltip>

    <wl-tooltip content="left" placement="left"><button class="px-2 py-1 border rounded">left</button></wl-tooltip>
    <div></div>
    <wl-tooltip content="right" placement="right"><button class="px-2 py-1 border rounded">right</button></wl-tooltip>

    <wl-tooltip content="leftBottom" placement="leftBottom"><button class="px-2 py-1 border rounded">leftBottom</button></wl-tooltip>
    <div></div>
    <wl-tooltip content="rightBottom" placement="rightBottom"><button class="px-2 py-1 border rounded">rightBottom</button></wl-tooltip>

    <wl-tooltip content="bottomLeft" placement="bottomLeft"><button class="px-2 py-1 border rounded">bottomLeft</button></wl-tooltip>
    <wl-tooltip content="bottom" placement="bottom"><button class="px-2 py-1 border rounded">bottom</button></wl-tooltip>
    <wl-tooltip content="bottomRight" placement="bottomRight"><button class="px-2 py-1 border rounded">bottomRight</button></wl-tooltip>
  </div>
</template>
