<script lang="ts" setup>
import { WlTooltip, WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" align="center">
    <wl-tooltip content="Themed" placement="top" style="--wl-tooltip-bg:#111827;--wl-tooltip-color:#F9FAFB;--wl-tooltip-radius:8px;--wl-tooltip-padding:8px 12px;">
      <button class="px-2 py-1 border border-solid border-indigo-500 rounded">custom vars</button>
    </wl-tooltip>
  </wl-flex>
</template>
