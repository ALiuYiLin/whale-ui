<script lang="ts" setup>
import { WlButton, WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" wrap align="center">
    <wl-button type="default">Default</wl-button>
    <wl-button type="primary">Primary</wl-button>
    <wl-button type="success">Success</wl-button>
    <wl-button type="warning">Warning</wl-button>
    <wl-button type="danger">Danger</wl-button>

    <wl-button type="primary" plain>Plain</wl-button>
    <wl-button type="primary" round>Round</wl-button>
    <wl-button type="primary" circle>◎</wl-button>
    <wl-button type="primary" disabled>Disabled</wl-button>

    <wl-button link>Link Button</wl-button>
    <wl-button text>Text Button</wl-button>

    <wl-button type="primary" loading>Loading</wl-button>

    <wl-button type="primary" size="small">Small</wl-button>
    <wl-button type="primary" size="middle">Middle</wl-button>
    <wl-button type="primary" size="large">Large</wl-button>
  </wl-flex>
</template>


