封装规范：
1. 组件封装位置：packages/components
2. 组件封装规范：
   1. 组件封装目录：packages/components/[组件名称]
   2. 组件封装文件-vue文件：packages/components/[组件名称]/组件名称.vue
   2. 组件封装文件-ts文件-用于导出props、emits等：packages/components/[组件名称]/组件名称.ts 
   2. 组件封装文件-index文件-用于导出组件：packages/components/[组件名称]/index.ts 
   3. 组件样式：packages/components/[组件名称]/index.scss
   4. 组件默认样式：packages/components/[组件名称]/default.scss
   5. 组件样式合成：packages\theme\index.scss
   6. 导出组件：packages\component.ts
   7. 组件使用：import { 组件名称 } from 'whale-ui'
   8. 示例编写：docs\src\examples\组件名称\caseName.vue
封装参考：
Flex组件：
packages\components\flex、
packages\theme\index.scss、
packages\component.ts、
docs\src\examples\layout\flex
