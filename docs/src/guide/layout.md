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

### 示例：常见栅格组合

#### 8-8-8
<div style="display:flex;flex-wrap:wrap;margin:-8px;">
  <div style="padding:8px;width:calc(100% * 8 / 24);">
    <div style="background:#1677FF;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 8</div>
  </div>
  <div style="padding:8px;width:calc(100% * 8 / 24);">
    <div style="background:#1677FF;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 8</div>
  </div>
  <div style="padding:8px;width:calc(100% * 8 / 24);">
    <div style="background:#1677FF;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 8</div>
  </div>
</div>

#### 12-12
<div style="display:flex;flex-wrap:wrap;margin:-8px;">
  <div style="padding:8px;width:calc(100% * 12 / 24);">
    <div style="background:#722ED1;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 12</div>
  </div>
  <div style="padding:8px;width:calc(100% * 12 / 24);">
    <div style="background:#722ED1;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 12</div>
  </div>
</div>

#### 6-6-6-6
<div style="display:flex;flex-wrap:wrap;margin:-8px;">
  <div style="padding:8px;width:calc(100% * 6 / 24);">
    <div style="background:#52C41A;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 6</div>
  </div>
  <div style="padding:8px;width:calc(100% * 6 / 24);">
    <div style="background:#52C41A;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 6</div>
  </div>
  <div style="padding:8px;width:calc(100% * 6 / 24);">
    <div style="background:#52C41A;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 6</div>
  </div>
  <div style="padding:8px;width:calc(100% * 6 / 24);">
    <div style="background:#52C41A;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 6</div>
  </div>
</div>

#### 4-4-4-4-4-4
<div style="display:flex;flex-wrap:wrap;margin:-8px;">
  <div style="padding:8px;width:calc(100% * 4 / 24);">
    <div style="background:#FA8C16;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 4</div>
  </div>
  <div style="padding:8px;width:calc(100% * 4 / 24);">
    <div style="background:#FA8C16;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 4</div>
  </div>
  <div style="padding:8px;width:calc(100% * 4 / 24);">
    <div style="background:#FA8C16;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 4</div>
  </div>
  <div style="padding:8px;width:calc(100% * 4 / 24);">
    <div style="background:#FA8C16;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 4</div>
  </div>
  <div style="padding:8px;width:calc(100% * 4 / 24);">
    <div style="background:#FA8C16;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 4</div>
  </div>
  <div style="padding:8px;width:calc(100% * 4 / 24);">
    <div style="background:#FA8C16;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 4</div>
  </div>
</div>

### 示例：gutter 间距（16）
<div style="display:flex;flex-wrap:wrap;margin:-16px;">
  <div style="padding:16px;width:calc(100% * 8 / 24);">
    <div style="background:#1677FF;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 8</div>
  </div>
  <div style="padding:16px;width:calc(100% * 8 / 24);">
    <div style="background:#1677FF;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 8</div>
  </div>
  <div style="padding:16px;width:calc(100% * 8 / 24);">
    <div style="background:#1677FF;color:#fff;text-align:center;border-radius:4px;padding:10px 0;">span 8</div>
  </div>
</div>


:::demo
layout/base
:::