<template>
  <component :is="'button'">
    <slot name="default"></slot>
  </component>
</template>

<script lang="ts" setup>
import { buttonProps } from './button';

const props = defineProps(buttonProps)


</script>