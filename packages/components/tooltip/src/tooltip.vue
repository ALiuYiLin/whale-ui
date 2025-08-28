<template>
  <div :class="tooltipKls">
    <slot></slot>
    <p :class="ns.m('content')">{{ content }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@whale-ui/hooks';
import { tooltipProps } from './tooltip';
import { computed } from 'vue';
const ns = useNamespace('tooltip')
const { type,content } = defineProps(tooltipProps)

const tooltipKls = computed(()=>[
  ns.b(),
  ns.m(type)
])

</script>