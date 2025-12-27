<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@whale-ui/hooks'
import { buttonEmits, buttonProps } from './button'
import type { ButtonVariant, ButtonShape } from './button'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const ns = useNamespace('button')

const classes = computed(() => {
  const modVariants: ButtonVariant[] = ['link','text','outlined','dashed','solid','filled']
  const shapeStates: ButtonShape[] = ['round','circle']
  return [
    ns.b(),
    ns.m(props.type),
    ns.m(props.size),
    props.variant && modVariants.includes(props.variant) ? ns.m(props.variant) : '',
    props.shape && shapeStates.includes(props.shape) ? ns.is(props.shape) : '',
    props.loading ? ns.is('loading') : '',
    props.disabled ? ns.is('disabled') : '',
  ]
})
function handleClick(e: MouseEvent) {
  if (props.disabled || props.loading) return
  emit('click', e)
}
</script>
<template>
  <component :is="component" :type="nativeType" :class="classes" :disabled="disabled || loading" @click="handleClick">
    <span v-if="loading" :class="ns.e('spinner')"></span>
    <span :class="ns.e('content')"><slot /></span>
  </component>
</template>
