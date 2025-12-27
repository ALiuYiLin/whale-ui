<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@whale-ui/hooks'
import { buttonEmits, buttonProps } from './button'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const ns = useNamespace('button')

const classes = computed(() => {
  return [
    ns.b(),
    ns.m(props.type),
    ns.m(props.size),
    props.link ? ns.m('link') : '',
    props.text ? ns.m('text') : '',
    props.plain ? ns.is('plain') : '',
    props.round ? ns.is('round') : '',
    props.circle ? ns.is('circle') : '',
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
