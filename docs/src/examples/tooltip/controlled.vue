<script lang="ts" setup>
import { ref } from 'vue'
import { WlTooltip, WlFlex, WlButton } from 'whale-ui'
const v1 = ref(false)
const v2 = ref(true)
</script>
<template>
  <wl-flex gap="small" align="center">
    <wl-tooltip content="Controlled top" placement="top" v-model:visible="v1">
      <wl-button type="primary" variant="outlined" @click="v1 = !v1">toggle top</wl-button>
    </wl-tooltip>
    <wl-tooltip content="Controlled rightTop" placement="rightTop" v-model:visible="v2">
      <wl-button type="primary" variant="outlined" @click="v2 = !v2">toggle rightTop</wl-button>
    </wl-tooltip>
  </wl-flex>
</template>
