<script lang="ts" setup>
import { ref } from 'vue'
import { WlTooltip, WlButton } from 'whale-ui'
const v = ref(false)
</script>
<template>
  <div class="space-x-4">
    <wl-tooltip trigger="click" content="Click to toggle" v-model:visible="v">
      <wl-button type="primary" variant="outlined">Click</wl-button>
    </wl-tooltip>
  </div>
</template>
