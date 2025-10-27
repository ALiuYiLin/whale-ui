<template>
  <component :is="'button'" class="wl-button">
    <slot></slot>
    <p>aaa</p>
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