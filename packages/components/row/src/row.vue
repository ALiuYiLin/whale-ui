<script lang="ts" setup>
import { useNamespace } from '@whale-ui/hooks';
import { rowContextKey, rowProps } from './row';
import { computed, provide } from 'vue';

const props = defineProps(rowProps)
const ns = useNamespace('row')

const rowKls = computed(() => {
  return [
    ns.b(),
    ns.is('justify-' + props.justify),
    ns.is('align-' + props.align),
  ]
})

const rowStyles = computed(() => {
  return {
    flexWrap: props.wrap ? 'wrap' : 'nowrap',
    marginInline: `-${props.gutter/2}px`,
  }
})
const gutter = computed(() => props.gutter)



provide(rowContextKey, {
  gutter,
})


</script>

<template>
  <component :is="'div'" :class="rowKls" :style="rowStyles">
    <slot></slot>
  </component>
</template>

