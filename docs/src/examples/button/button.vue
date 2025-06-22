<template>
  <div>
    <wl-row>
      <WlButton :type="'default'">Default</WlButton>
      <WlButton :type="'primary'">Primary</WlButton>
      <WlButton :type="'success'">Success</WlButton>
      <WlButton :type="'info'">Info</WlButton>
      <WlButton :type="'warning'">Warning</WlButton>
      <WlButton :type="'danger'">Danger</WlButton>
    </wl-row>
    <wl-row>
      <WlButton :type="'default'":round="true">Default</WlButton>
      <WlButton :type="'primary'":round="true">Primary</WlButton>
      <WlButton :type="'success'":round="true">Success</WlButton>
      <WlButton :type="'info'":round="true">Info</WlButton>
      <WlButton :type="'warning'":round="true">Warning</WlButton>
      <WlButton :type="'danger'":round="true">Danger</WlButton>
    </wl-row>
  </div>
</template>

<script setup lang="ts">
import {WlButton,WlRow } from 'whale-ui';
</script>

<style>
.wl-row + .wl-row{
  margin-top: 15px;
}
.wl-button + .wl-button{
  margin-left: 20px;
}

</style>