<script lang="ts" setup>
import { computed, useSlots } from "vue";
import { dividerProps } from "./divider";
import { useNamespace } from "@whale-ui/hooks";

const props = defineProps(dividerProps);
const ns = useNamespace("divider");
const slots = useSlots();

const dividerKls = computed(() => {
  return [
    ns.b(),
    ns.is(`with-text`,!!slots.default && !props.vertical),
    ns.is("vertical", props.vertical),
    ns.is("horizontal", !props.vertical),
    ns.m(props.variant),
    ns.is(`text-${props.titlePlacement}`, !!slots.default && !props.vertical),
  ];
});
</script>

<template>
  <div :class="dividerKls" role="separator">
    <div v-if="$slots.default" :class="ns.e('line-start')"></div>
    <span v-if="$slots.default && !vertical" :class="ns.e('text')">
      <slot />
    </span>
    <div v-if="$slots.default" :class="ns.e('line-end')"></div>
  </div>
</template>
