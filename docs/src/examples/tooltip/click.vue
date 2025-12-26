<script lang="ts" setup>
import { ref } from 'vue'
import { WlTooltip } from 'whale-ui'
const v = ref(false)
</script>
<template>
  <div class="space-x-4">
    <wl-tooltip trigger="click" content="Click to toggle" v-model:visible="v">
      <button class="px-2 py-1 border border-solid border-indigo-500 rounded">Click</button>
    </wl-tooltip>
  </div>
</template>
