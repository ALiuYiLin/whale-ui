<script lang="ts" setup>
import { WlTooltip, WlFlex, WlButton } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" align="center">
    <wl-tooltip placement="bottom">
      <wl-button type="primary" variant="outlined">custom slot</wl-button>
      <template #content>
        <div class="flex items-center space-x-2">
          <span class="inline-block w-2 h-2 rounded-full bg-green-500"></span>
          <span>操作成功</span>
        </div>
      </template>
    </wl-tooltip>
  </wl-flex>
</template>
