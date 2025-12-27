<script lang="ts" setup>
import { WlTooltip, WlFlex, WlButton } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" align="center">
    <wl-tooltip content="Top tooltip" placement="top">
      <wl-button type="primary" variant="outlined">Top</wl-button>
    </wl-tooltip>
    <wl-tooltip content="Bottom tooltip" placement="bottom">
      <wl-button type="primary" variant="outlined">Bottom</wl-button>
    </wl-tooltip>
    <wl-tooltip content="Left tooltip" placement="left">
      <wl-button type="primary" variant="outlined">Left</wl-button>
    </wl-tooltip>
    <wl-tooltip content="Right tooltip" placement="right">
      <wl-button type="primary" variant="outlined">Right</wl-button>
    </wl-tooltip>
  </wl-flex>
</template>
