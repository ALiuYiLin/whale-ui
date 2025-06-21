# 快速开始
## 安装
### 使用包管理器
我们建议您使用包管理器（如 `NPM`、`Yarn` 或 `pnpm`）安装 `whale-ui`，然后您就可以使用打包工具，例如 `Vite` 或 `webpack`。
```bash
# 选择一个你喜欢的包管理器

# NPM
$ npm install whale-ui --save

# Yarn
$ yarn add whale-ui

# pnpm
$ pnpm install whale-ui
```
## 导入组件样式
```typescript
// src/main.ts
import { createApp } from 'vue'
import './style.css'
import 'whale-ui/theme/index.css' //导入whale-ui组件库样式
import App from './App.vue'

createApp(App).mount('#app')
```

## 手动导入
目前仅支持手动导入的方式来使用组件库
```html
<template>
  <WlButton :type="'default'":round="true">Default</WlButton>
</template>

<script setup lang="ts">
import { WlButton } from 'whale-ui';
</script>
```

## 高级用法

### 组件库样式利用
可通过`whale-ui`组件库导出的`cssConfg`变量，利用组件库样式，使开发应用风格保持一致，不与组件样式风格冲突。

```html
<template>
  <div class="css-var-example">
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>
<script lang="ts" setup>
import { cssConfig } from 'whale-ui';
</script>
<style scoped>
.box:nth-child(1){
  background-color: v-bind('cssConfig.color.primary.default');
}
.box:nth-child(2){
  background-color: v-bind('cssConfig.color.warning.default');
}
</style>
```
