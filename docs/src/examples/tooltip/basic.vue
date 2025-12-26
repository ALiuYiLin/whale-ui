<script lang="ts" setup>
import { WlTooltip, WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" align="center">
    <wl-tooltip content="Top tooltip" placement="top">
      <button class="px-2 py-1 border border-solid border-indigo-500 rounded">Top</button>
    </wl-tooltip>
    <wl-tooltip content="Bottom tooltip" placement="bottom">
      <button class="px-2 py-1 border border-solid border-indigo-500 rounded">Bottom</button>
    </wl-tooltip>
    <wl-tooltip content="Left tooltip" placement="left">
      <button class="px-2 py-1 border border-solid border-indigo-500 rounded">Left</button>
    </wl-tooltip>
    <wl-tooltip content="Right tooltip" placement="right">
      <button class="px-2 py-1 border border-solid border-indigo-500 rounded">Right</button>
    </wl-tooltip>
  </wl-flex>
</template>
