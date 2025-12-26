## 一、封装规范

- 组件封装位置：packages/components
- 组件封装规范：
   1. 组件封装目录：packages/components/[组件名称]
   2. 组件封装文件-vue文件：packages/components/[组件名称]/组件名称.vue
   3. 组件封装文件-ts文件-用于导出props、emits等：packages/components/[组件名称]/组件名称.ts
   4. 组件封装文件-index文件-用于导出组件：packages/components/[组件名称]/index.ts
   5. 组件样式：packages/components/[组件名称]/style/index.scss
   6. 组件默认样式：packages/components/[组件名称]/style/[组件名称]-default.scss
   7. 组件样式合成：packages\theme\index.scss
   8. 导出组件：packages\component.ts
   9. 组件使用：import { 组件名称 } from 'whale-ui'
   10. 示例编写：docs\src\examples\[组件名称]\[case-name].vue

## 二、封装参考
Flex组件：
packages\components\flex、 
packages\theme\index.scss、
packages\component.ts、
docs\src\examples\flex

## 三、用例书写规范

- 示例目录
  - 路径：docs\src\examples\[组件名称]\[case-name].vue
  - 命名：组件与用例名使用小写短横线命名（kebab-case）
- 示例页面引用
  - 组件文档路径：docs\src\components\[组件名称].md
  - 引用语法：:::demo [组件名称]/[case-name] :::
- 示例结构
  - 使用 `<script lang="ts" setup>` 语法
  - 从 `whale-ui` 引入组件，例如：`import { WlFlex } from 'whale-ui'`
  - 模板中直接使用组件标签，如：`<wl-flex gap="small">...</wl-flex>`
- 风格约定
  - 示例尽量保持最小包裹容器，必要时可使用工具类（如 `w-full`, `mt-4`）
  - 组件默认样式不应覆盖常用外部工具类的间距设置（如 Flex 不重置 margin）
- Flex 示例约定
  - 基础：`flex/basic`
  - 主轴对齐：`flex/justify`
  - 交叉轴对齐：`flex/align`
  - 嵌套：`flex/nested`

## 四、文档注册规范

- 组件用例页面需在 `docs/.vitepress/config.mts` 的侧边栏注册
  - 路径键：`/components/`
  - 项目格式：`{ text: "<组件名称>", link: "/components/<组件名称>" }`
  - 示例：
    - `docs/.vitepress/config.mts:37–40`
    - `{ text: "flex", link: "/components/flex" }`

## 五、示例代码片段

```vue
<script lang="ts" setup>
import { WlFlex } from 'whale-ui'
</script>
<template>
  <wl-flex gap="small" class="w-full">
    <div class="bg-gray-200 text-center min-w-[120px]">item</div>
    <div class="bg-gray-200 text-center min-w-[120px]">item</div>
  </wl-flex>
</template>
```

## 六、SCSS 样式书写规范

- 文件组织
  - 默认样式：`packages/components/[组件名称]/style/[组件名称]-default.scss`
  - 聚合入口：`packages/components/[组件名称]/style/index.scss` 使用 `@use './[组件名称]-default.scss' as *;`
- 引入依赖
  - 引入主题混入与变量：`@use '@whale-ui/theme/mixins' as *;`、`@use '@whale-ui/theme/var' as *;`
- 组件变量
  - 在 `[组件名称]-default.scss` 中定义 `$[组件名称]Vars`，集中管理颜色、边框、间距、字号等
  - 使用 `@include set-component-css-var([组件名称], $[组件名称]Vars);` 注入 CSS 变量
  - 在样式中通过 `getCssVar('[组件名称]', '[变量名]')` 引用，不直接硬编码数值或颜色
- BEM 结构
  - 块：`@include b([组件名称]) { ... }`
  - 元素：`@include e('[元素名]') { ... }`
  - 修饰符：`@include m('[修饰符]') { ... }`，如 `dashed/dotted/solid/horizontal/vertical/with-text`
  - 状态：`@include when('[state]') { ... }`，如 `active/disabled`
- 变量覆写
  - 在修饰符或状态中使用 `@include set-css-var-value('[组件]-[变量名]', [值]);` 动态覆写组件变量
- 特异性与可覆盖性
  - 避免提高选择器特异性，不使用组合类 `.block.block--modifier`；让主题与工具类易于覆盖
  - 不清零常见外部工具类间距（如不设置 `margin: 0`）；默认间距使用组件自有变量控制
- 示例（以 Divider 为例）

```scss
@use '@whale-ui/theme/mixins' as *;
@use '@whale-ui/theme/var' as *;

$dividerVars: (
  'text-color': getCssVar('color', 'neutral', '700'),
  'font-size': 14px,
  'border-type': solid,
  'border-color': getCssVar('color', 'neutral', '200'),
  'border-top': 1px getCssVar('divider', 'border-type') getCssVar('divider', 'border-color'),
  'horizontal-margin': 24px 0,
  'vertical-margin': 0 8px,
  'text-padding': 0 12px,
);

@include b(divider) {
  @include set-component-css-var(divider, $dividerVars);
  box-sizing: border-box;
  padding: 0;
  color: getCssVar('divider', 'text-color');
  font-size: getCssVar('divider', 'font-size');

  @include m('dashed') { @include set-css-var-value('divider-border-type', dashed); }
  @include m('dotted') { @include set-css-var-value('divider-border-type', dotted); }
  @include m('solid')  { @include set-css-var-value('divider-border-type', solid); }

  @include m(horizontal) {
    display: flex;
    width: 100%;
    margin: getCssVar('divider', 'horizontal-margin');
    border-top: getCssVar('divider', 'border-top');
  }

  @include m('with-text') {
    border-top: 0;
    display: flex;
    align-items: center;
    @include e('text') { padding: getCssVar('divider', 'text-padding'); }
  }
}
```
