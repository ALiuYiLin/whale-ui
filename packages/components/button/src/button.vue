<template>
  <component :is="'button'">{{ props.size }}</component>
</template>

<script lang="ts" setup>
import { buttonProps } from './button';

const props = defineProps(buttonProps)


</script>