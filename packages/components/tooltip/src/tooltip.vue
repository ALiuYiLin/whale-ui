<script lang="ts" setup>
import { ref, computed } from 'vue'
import { tooltipProps } from './tooltip'

const props = defineProps(tooltipProps)
const emit = defineEmits<{ (e: 'update:visible', v: boolean): void }>()

const innerVisible = ref(false)
const mergedVisible = computed(() => {
  if (props.visible === undefined) return innerVisible.value
  return props.visible
})

const classes = computed(() => {
  return [
    'wl-tooltip',
    `wl-tooltip--${props.trigger}`,
    `wl-tooltip--${props.placement}`,
    mergedVisible.value ? 'is-visible' : ''
  ].filter(Boolean).join(' ')
})

function onEnter() {
  if (props.disabled) return
  if (props.trigger === 'hover' && props.visible === undefined) {
    innerVisible.value = true
  }
}
function onLeave() {
  if (props.disabled) return
  if (props.trigger === 'hover' && props.visible === undefined) {
    innerVisible.value = false
  }
}
function onToggle() {
  if (props.disabled) return
  if (props.trigger === 'click') {
    const next = !mergedVisible.value
    if (props.visible === undefined) innerVisible.value = next
    emit('update:visible', next)
  }
}
</script>
<template>
  <span
    :class="classes"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @click="onToggle"
  >
    <slot />
    <span class="wl-tooltip__content">
      <slot name="content">{{ props.content }}</slot>
      <span class="wl-tooltip__arrow"></span>
    </span>
  </span>
</template>
