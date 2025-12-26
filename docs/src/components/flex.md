# Flex 弹性布局

基于 Flexbox 的布局组件。

## 基础用法

:::demo
flex/basic
:::

## 主轴对齐

使用 `justify` 控制主轴对齐方式，支持 `start`、`center`、`end`、`between`、`around`、`evenly`。

:::demo
flex/justify
:::

## 交叉轴对齐

使用 `align` 控制交叉轴对齐方式，支持 `start`、`center`、`end`、`baseline`、`stretch`。

:::demo
flex/align
:::

## 嵌套

支持嵌套使用。

:::demo
flex/nested
:::

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gap | 间距 | `none` \| `small` \| `middle` \| `large` | `none` |
| vertical | 是否垂直布局 | `boolean` | `false` |
| justify | 主轴对齐 | `start` \| `center` \| `end` \| `between` \| `around` \| `evenly` | `start` |
| align | 交叉轴对齐 | `start` \| `center` \| `end` \| `baseline` \| `stretch` | `start` |
