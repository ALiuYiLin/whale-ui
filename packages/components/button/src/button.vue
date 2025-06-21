<template>
  <component :is="'button'" :class="buttonKls" >
    <slot name="default"></slot>
  </component>
</template>

<script lang="ts" setup>
import { useNamespace } from '@whale-ui/hooks';
import { buttonProps } from './button';
import { computed } from 'vue';

const props = defineProps(buttonProps)
const ns = useNamespace('button')
const buttonKls = computed(() => [
  ns.b(),
  ns.m(props.size)
])
</script>