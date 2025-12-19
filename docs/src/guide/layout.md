# 布局
## 24 栅格系统

### 原则
- 总列数为 `24`，列宽为 `span / 24 * 100%`
- 栅格以行 Row 和列 Col 组成，Col 必须放在 Row 中
- 支持响应式断点（对齐 Ant Design）：`xs / sm / md / lg / xl / xxl`
- 间距（gutter）推荐：`8 / 16 / 24`（按场景选择）

### 术语
- 容器 Container：承载页面内容的最外层
- 行 Row：水平布局单元，控制一行内的对齐与间距
- 列 Col：具体的内容块，按 `span` 占据栅格列数

### 断点参考
- `xs < 576px`
- `sm ≥ 576px`
- `md ≥ 768px`
- `lg ≥ 992px`
- `xl ≥ 1200px`
- `xxl ≥ 1600px`

栅格 布局
:::demo
layout/base
:::

flex 布局

:::demo
layout/flex/base
:::