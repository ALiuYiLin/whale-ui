<script lang="ts" setup>
import { WlButton, WlFlex } from 'whale-ui'
</script>
<template>
  <form onsubmit="return false;">
    <wl-flex gap="small" wrap>
      <wl-button native-type="button" type="primary">Native: button</wl-button>
      <wl-button native-type="submit" type="primary">Native: submit</wl-button>
      <wl-button native-type="reset" type="primary">Native: reset</wl-button>
    </wl-flex>
  </form>
</template>
