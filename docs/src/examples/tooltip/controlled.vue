<script lang="ts" setup>
import { ref } from 'vue'
import { WlTooltip, WlFlex } from 'whale-ui'
const v1 = ref(false)
const v2 = ref(true)
</script>
<template>
  <wl-flex gap="small" align="center">
    <wl-tooltip content="Controlled top" placement="top" v-model:visible="v1">
      <button class="px-2 py-1 border border-solid border-indigo-500 rounded" @click="v1 = !v1">toggle top</button>
    </wl-tooltip>
    <wl-tooltip content="Controlled rightTop" placement="rightTop" v-model:visible="v2">
      <button class="px-2 py-1 border border-solid border-indigo-500 rounded" @click="v2 = !v2">toggle rightTop</button>
    </wl-tooltip>
  </wl-flex>
</template>
