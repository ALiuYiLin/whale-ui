<script lang="ts" setup>
import { WlButton, WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" wrap align="center">
    <wl-button component="button" type="primary">Tag: button</wl-button>
    <wl-button component="div" type="primary">Tag: div</wl-button>
    <wl-button component="span" type="primary">Tag: span</wl-button>
  </wl-flex>
</template>
