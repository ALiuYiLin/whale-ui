<script lang="ts" setup>
import { WlTooltip } from 'whale-ui'
</script>
<template>
  <div class="space-x-4">
    <wl-tooltip content="Top tooltip" placement="top">
      <button class="px-2 py-1 border rounded">Top</button>
    </wl-tooltip>
    <wl-tooltip content="Bottom tooltip" placement="bottom">
      <button class="px-2 py-1 border rounded">Bottom</button>
    </wl-tooltip>
    <wl-tooltip content="Left tooltip" placement="left">
      <button class="px-2 py-1 border rounded">Left</button>
    </wl-tooltip>
    <wl-tooltip content="Right tooltip" placement="right">
      <button class="px-2 py-1 border rounded">Right</button>
    </wl-tooltip>
  </div>
</template>
