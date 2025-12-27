<script lang="ts" setup>
import { WlButton, WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" wrap align="center">
    <wl-button type="default" loading>Default</wl-button>
    <wl-button type="primary" loading>Primary</wl-button>
    <wl-button type="success" loading>Success</wl-button>
    <wl-button type="warning" loading>Warning</wl-button>
    <wl-button type="danger" loading>Danger</wl-button>
  </wl-flex>
</template>
