# Layout 布局
通过基础的 24 分栏，迅速简便地创建布局。

::: tip
组件默认使用 Flex 布局，不需要手动设置 type="flex"。

请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。
:::

## 基础布局
使用列创建基础网格布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

:::demo
components/layout/base
:::

## 分栏间隔
支持列间距。

行提供 `gutter` 属性来指定列之间的间距，其默认值为0。

:::demo
components/layout/gutter
:::