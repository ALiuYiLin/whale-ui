<script lang="ts" setup>
import '../styles/index.scss';

import { computed } from 'vue';
import { useNamespace } from '@whale-ui/hooks';
import { buttonProps } from './button';



const props = defineProps(buttonProps)

const ns = useNamespace('button')

const buttonKls = computed(() => {
  return [
    ns.b(),
    ns.m(props.skin)
  ]
})


</script>
<template>
  <component :is="'button'" :class="buttonKls">
    <slot></slot>
  </component>
</template>