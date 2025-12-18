<script lang="ts" setup>
import { computed, inject } from 'vue';
import { colProps } from './col';
import { rowContextKey } from '@whale-ui/components/row';
import { useNamespace } from '@whale-ui/hooks';
const props = defineProps(colProps)
const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) })
const ns = useNamespace('col')
const colStyles = computed(() => {
  return {
    paddingInline: `${gutter.value/2}px`,
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