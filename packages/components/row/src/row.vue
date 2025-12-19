<script lang="ts" setup>
import { useNamespace } from "@whale-ui/hooks";
import {  rowContextKey, rowProps } from "./row";
import { computed, provide } from "vue";
import { getGutterStyles } from "./gutter-styles";

const props = defineProps(rowProps);
const ns = useNamespace("row");
const gutter = computed(() => props.gutter);

const rowKls = computed(() => {
  return [
    ns.b(),
    ns.is("justify-" + props.justify),
    ns.is("align-" + props.align),
  ];
});

const rowStyles = computed(() => {
  return {
    flexWrap: props.wrap ? "wrap" : "nowrap",
    ...getGutterStyles(props.gutter),
  };
});

provide(rowContextKey, {
  gutter,
});
</script>

<template>
  <component :is="component" :class="rowKls" :style="rowStyles">
    <slot></slot>
  </component>
</template>
