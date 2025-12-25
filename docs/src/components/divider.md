# Divider 分割线

区隔内容的分割线。

## 基础用法

默认为水平分割线。

:::demo
divider/basic
:::

## 垂直分割线

使用 `vertical` 设置为垂直分割线。

:::demo
divider/vertical
:::

## 带文字的分割线

分割线中带有文字，支持 `start`、`center`、`end` 位置。

:::demo
divider/with-text
:::

## 样式

支持虚线 `dashed` 和点线 `dotted`。

:::demo
divider/variant
:::

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 分割线样式 | `dashed` \| `dotted` \| `solid` | `solid` |
| size | 间距大小，仅对水平布局有效 | `small` \| `middle` \| `large` | `middle` |
| vertical | 是否垂直 | `boolean` | `false` |
| title-placement | 分割线标题的位置 | `start` \| `end` \| `center` | `center` |
