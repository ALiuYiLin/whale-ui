<script lang="ts" setup>
import { WlButton, WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" wrap align="center">
    <wl-button type="primary" variant="link">Link Button</wl-button>
    <wl-button type="warning" variant="link" disabled>Disabled Link</wl-button>
    <wl-button type="danger" variant="link" loading>Loading Link</wl-button>
  </wl-flex>
</template>
