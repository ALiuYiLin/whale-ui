<script lang="ts" setup>
import { WlTooltip } from 'whale-ui'
</script>
<template>
  <div class="space-x-4">
    <wl-tooltip content="Themed" placement="top" style="--wl-tooltip-bg:#111827;--wl-tooltip-color:#F9FAFB;--wl-tooltip-radius:8px;--wl-tooltip-padding:8px 12px;">
      <button class="px-2 py-1 border rounded">custom vars</button>
    </wl-tooltip>
  </div>
</template>
