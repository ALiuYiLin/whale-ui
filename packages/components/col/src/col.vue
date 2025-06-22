<template>
  <component :is="tag" :class="colKls" :style="style">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { colProps } from './col'
import type { CSSProperties } from 'vue'
import { useNamespace } from '@whale-ui/hooks'
import { rowContextKey } from '@whale-ui/components/row'
import { isNumber } from '@whale-ui/utils'


defineOptions({
  name: 'ElCol',
})

const props = defineProps(colProps)

const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) })
const ns = useNamespace('col')

const style = computed(() => {
  const styles: CSSProperties = {}
  if (gutter.value) {
    styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`
  }
  return styles
})

const colKls = computed(() => {
  const classes: string[] = []
  const pos = ['span', 'offset', 'pull', 'push'] as const

  pos.forEach((prop) => {
    const size = props[prop]
    if (isNumber(size)) {
      if (prop === 'span') classes.push(ns.b(`${props[prop]}`))
      else if (size > 0) classes.push(ns.b(`${prop}-${props[prop]}`))
    }
  })

  // this is for the fix
  if (gutter.value) {
    classes.push(ns.is('guttered'))
  }
  return [ns.b(), classes]
})
</script>
