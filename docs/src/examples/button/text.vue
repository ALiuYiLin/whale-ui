<script lang="ts" setup>
import { WlButton, WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" wrap align="center">
    <wl-button variant="text">Text Button</wl-button>
    <wl-button variant="text" disabled>Disabled Text</wl-button>
    <wl-button variant="text" loading>Loading Text</wl-button>
  </wl-flex>
</template>
