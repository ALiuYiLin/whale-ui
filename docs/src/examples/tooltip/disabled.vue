<script lang="ts" setup>
import { WlTooltip } from 'whale-ui'
</script>
<template>
  <div class="space-x-4">
    <wl-tooltip content="Disabled hover" placement="top" disabled>
      <button class="px-2 py-1 border rounded">hover disabled</button>
    </wl-tooltip>
    <wl-tooltip content="Disabled click" placement="top" trigger="click" disabled>
      <button class="px-2 py-1 border rounded">click disabled</button>
    </wl-tooltip>
  </div>
</template>
