<script lang="ts" setup>
import { WlButton, WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" wrap align="center">
    <wl-button link>Link Button</wl-button>
    <wl-button link disabled>Disabled Link</wl-button>
    <wl-button link loading>Loading Link</wl-button>
  </wl-flex>
</template>
