<script lang="ts" setup>
import { WlTooltip, WlFlex, WlButton } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" align="center">
    <wl-tooltip content="Disabled hover" placement="top" disabled>
      <wl-button type="primary" variant="outlined">hover disabled</wl-button>
    </wl-tooltip>
    <wl-tooltip content="Disabled click" placement="top" trigger="click" disabled>
      <wl-button type="primary" variant="outlined">click disabled</wl-button>
    </wl-tooltip>
  </wl-flex>
</template>
