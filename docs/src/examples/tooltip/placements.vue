<script lang="ts" setup>
import { WlTooltip, WlFlex, WlButton } from 'whale-ui'
</script>
<template>
  <wl-flex vertical gap="small" align="center">
    <wl-flex gap="small" justify="center" class="w-full">
      <wl-tooltip content="topLeft" placement="topLeft"><wl-button type="primary" variant="outlined">topLeft</wl-button></wl-tooltip>
      <wl-tooltip content="top" placement="top"><wl-button type="primary" variant="outlined">top</wl-button></wl-tooltip>
      <wl-tooltip content="topRight" placement="topRight"><wl-button type="primary" variant="outlined">topRight</wl-button></wl-tooltip>
    </wl-flex>

    <wl-flex gap="small" justify="between" class="w-full">
      <wl-tooltip content="leftTop" placement="leftTop"><wl-button type="primary" variant="outlined">leftTop</wl-button></wl-tooltip>
      <div class="flex-1"></div>
      <wl-tooltip content="rightTop" placement="rightTop"><wl-button type="primary" variant="outlined">rightTop</wl-button></wl-tooltip>
    </wl-flex>

    <wl-flex gap="small" justify="between" class="w-full">
      <wl-tooltip content="left" placement="left"><wl-button type="primary" variant="outlined">left</wl-button></wl-tooltip>
      <div class="flex-1"></div>
      <wl-tooltip content="right" placement="right"><wl-button type="primary" variant="outlined">right</wl-button></wl-tooltip>
    </wl-flex>

    <wl-flex gap="small" justify="between" class="w-full">
      <wl-tooltip content="leftBottom" placement="leftBottom"><wl-button type="primary" variant="outlined">leftBottom</wl-button></wl-tooltip>
      <div class="flex-1"></div>
      <wl-tooltip content="rightBottom" placement="rightBottom"><wl-button type="primary" variant="outlined">rightBottom</wl-button></wl-tooltip>
    </wl-flex>

    <wl-flex gap="small" justify="center" class="w-full">
      <wl-tooltip content="bottomLeft" placement="bottomLeft"><wl-button type="primary" variant="outlined">bottomLeft</wl-button></wl-tooltip>
      <wl-tooltip content="bottom" placement="bottom"><wl-button type="primary" variant="outlined">bottom</wl-button></wl-tooltip>
      <wl-tooltip content="bottomRight" placement="bottomRight"><wl-button type="primary" variant="outlined">bottomRight</wl-button></wl-tooltip>
    </wl-flex>
  </wl-flex>
</template>
