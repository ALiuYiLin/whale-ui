<script lang="ts" setup>
import './styles/soft.scss';

import { computed } from 'vue';
import { useNamespace } from '@whale-ui/hooks';


const props = defineProps({
  skin: {
    type: String,
    default: '',
  }
})

const ns = useNamespace('button')

const buttonKls = computed(() => {
  return [
    ns.b(),
    ns.m(props.skin)
  ]
})


</script>
<template>
  <component :is="'button'" :class="buttonKls">
    <slot></slot>
  </component>
</template>


<style lang="scss">
.wl-button {
  color: red;
  border: 1px solid black;
  p {
    color: blue;
  }
}
</style>