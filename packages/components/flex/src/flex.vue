<script lang="ts" setup>
import { computed } from "vue";
import { flexProps } from "./flex";
import { useNamespace } from "@whale-ui/hooks";

const props = defineProps(flexProps);
const ns = useNamespace("flex");

const direction = computed(() => {
  if (props.vertical) return 'column';
  return 'row';
});

const gapValue = computed(() => {
  if (props.gap === 'small') return '8px';
  if (props.gap === 'middle') return '16px';
  if (props.gap === 'large') return '24px';
  if (typeof props.gap === 'number') return `${props.gap}px`;
  return props.gap;
});

const wrapValue = computed(() => {
  if (props.wrap === true) return 'wrap';
  if (props.wrap === false) return 'nowrap';
  return props.wrap;
});

const flexKls = computed(() => {
  return [
    ns.b(),
    ns.is("justify-" + props.justify),
    ns.is("align-" + props.align),
  ];
});

const flexStyles = computed(() => {
  return {
    flexDirection: direction.value,
    flexWrap: wrapValue.value,
    gap: gapValue.value,
  };
});
</script>

<template>
  <component :is="component" :class="flexKls" :style="flexStyles">
    <slot></slot>
  </component>
</template>
