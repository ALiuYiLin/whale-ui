<script lang="ts" setup>
import { ref } from 'vue'
import { WlTooltip } from 'whale-ui'
const v1 = ref(false)
const v2 = ref(true)
</script>
<template>
  <div class="space-x-4">
    <wl-tooltip content="Controlled top" placement="top" v-model:visible="v1">
      <button class="px-2 py-1 border rounded" @click="v1 = !v1">toggle top</button>
    </wl-tooltip>
    <wl-tooltip content="Controlled rightTop" placement="rightTop" v-model:visible="v2">
      <button class="px-2 py-1 border rounded" @click="v2 = !v2">toggle rightTop</button>
    </wl-tooltip>
  </div>
</template>
