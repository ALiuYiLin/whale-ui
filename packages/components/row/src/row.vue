<script lang="ts" setup>
import { useNamespace } from '@whale-ui/hooks';
import { gutterMap, rowContextKey, rowProps } from './row';
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
  let gutter:number|null
  if(typeof props.gutter === 'string'){
    gutter = gutterMap[props.gutter as keyof typeof gutterMap]
  }
  else if(typeof props.gutter === 'number'){
    gutter = props.gutter
  }
  else{
    gutter = 0
  }
  return {
    flexWrap: props.wrap ? 'wrap' : 'nowrap',
    marginInline: `-${gutter/2}px`,
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

