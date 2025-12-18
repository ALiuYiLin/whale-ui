<script lang="ts" setup>
import { computed, inject } from 'vue';
import { colProps } from './col';
import { gutterMap, rowContextKey } from '@whale-ui/components/row';
import { useNamespace } from '@whale-ui/hooks';
const props = defineProps(colProps)
const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) })
const ns = useNamespace('col')
const colStyles = computed(() => {
  let gutterValue:number
  if(typeof gutter.value === 'string'){
    gutterValue = gutterMap[gutter.value as keyof typeof gutterMap]
  }
  else if(typeof gutter.value === 'number'){
    gutterValue = gutter.value
  }
  else{
    gutterValue = 0
  }
  return {
    paddingInline: `${gutterValue/2}px`,
  }
})
const colKls = computed(() => {
  return [
    ns.b(),
    ns.b(props.span.toString())
  ]
})
</script>

<template>
  <component :is="'div'" :class="colKls" :style="colStyles">
    <slot></slot>
  </component>
</template>