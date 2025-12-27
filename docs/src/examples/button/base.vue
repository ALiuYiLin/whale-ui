<script lang="ts" setup>
import { WlButton, WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" vertical >
    <wl-flex gap="small" wrap align="center">
      <wl-button  variant="filled">filled</wl-button>
      <wl-button  variant="outlined">outlined</wl-button>
      <wl-button  variant="dashed">dashed</wl-button>
      <wl-button  variant="text">text</wl-button>
      <wl-button  variant="link">link</wl-button>
    </wl-flex>

    <wl-flex gap="small" wrap align="center">
      <wl-button type="primary" variant="filled">filled</wl-button>
      <wl-button type="primary" variant="outlined">outlined</wl-button>
      <wl-button type="primary" variant="dashed">dashed</wl-button>
      <wl-button type="primary" variant="text">text</wl-button>
      <wl-button type="primary" variant="link">link</wl-button>
    </wl-flex>

    <wl-flex gap="small" wrap align="center">
      <wl-button type="success" variant="filled">filled</wl-button>
      <wl-button type="success" variant="outlined">outlined</wl-button>
      <wl-button type="success" variant="dashed">dashed</wl-button>
      <wl-button type="success" variant="text">text</wl-button>
      <wl-button type="success" variant="link">link</wl-button>
    </wl-flex>

    <wl-flex gap="small" wrap align="center">
      <wl-button type="warning" variant="filled">filled</wl-button>
      <wl-button type="warning" variant="outlined">outlined</wl-button>
      <wl-button type="warning" variant="dashed">dashed</wl-button>
      <wl-button type="warning" variant="text">text</wl-button>
      <wl-button type="warning" variant="link">link</wl-button>
    </wl-flex>

  
    <wl-flex gap="small" wrap align="center">
      <wl-button type="danger" variant="filled">filled</wl-button>
      <wl-button type="danger" variant="outlined">outlined</wl-button>
      <wl-button type="danger" variant="dashed">dashed</wl-button>
      <wl-button type="danger" variant="text">text</wl-button>
      <wl-button type="danger" variant="link">link</wl-button>
    </wl-flex>

  </wl-flex>
</template>


