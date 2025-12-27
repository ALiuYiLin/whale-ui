<script lang="ts" setup>
import { WlButton, WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" wrap>
    <wl-button type="default" disabled>Default</wl-button>
    <wl-button type="primary" disabled>Primary</wl-button>
    <wl-button type="success" disabled>Success</wl-button>
    <wl-button type="warning" disabled>Warning</wl-button>
    <wl-button type="danger" disabled>Danger</wl-button>
  </wl-flex>
</template>
