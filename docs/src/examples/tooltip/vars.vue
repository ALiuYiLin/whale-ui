<script lang="ts" setup>
import { WlTooltip, WlFlex, WlButton } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" align="center">
    <wl-tooltip content="Themed" placement="top" style="--wl-tooltip-bg:#111827;--wl-tooltip-color:#F9FAFB;--wl-tooltip-radius:8px;--wl-tooltip-padding:8px 12px;">
      <wl-button type="primary" variant="outlined">custom vars</wl-button>
    </wl-tooltip>
  </wl-flex>
</template>
