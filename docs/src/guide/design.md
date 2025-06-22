# 设计
## 组件库设计思路
在大多数的应用开发中，多个页面之间，它们的排版、风格是一致的，比如字体颜色、内外间距大小等。

然而现有的组件库，都很难利用其中的css样式，这样会导致应用中页面风格的不一致。

为了解决这个问题，whale-ui组件库将其所用的css变量导出，可以保证页面风格和组件库所使用风格一致。

### 使用案例
1、导入css配置变量
```Typescript
// example.vue  ts setup
import { cssConfig } from 'whale-ui';

```
2、在style应用
```css
.box:nth-child(1){
  background-color: v-bind('cssConfig.color.primary.default');
}
.box:nth-child(2){
  background-color: v-bind('cssConfig.color.warning.default');
}
```

<Base></Base>

:::demo
var/base
:::