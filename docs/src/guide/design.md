# 设计
## 组件库设计思路


### 色彩
本库沿用 Ant Design 色彩系统，采用 1–10 阶梯色板（由浅到深）。更多说明参见 `https://ant.design/docs/spec/colors-cn`。
 
#### 蓝 Blue
- 1: `#E6F4FF`
- 2: `#BAE0FF`
- 3: `#91CAFF`
- 4: `#69B1FF`
- 5: `#4096FF`
- 6: `#1677FF`
- 7: `#0958D9`
- 8: `#003EB3`
- 9: `#002C8C`
- 10: `#001D66`
 
<div>
  <p style="background-color:#E6F4FF;padding:10px;margin:0;">蓝-1 #E6F4FF</p>
  <p style="background-color:#BAE0FF;padding:10px;margin:0;">蓝-2 #BAE0FF</p>
  <p style="background-color:#91CAFF;padding:10px;margin:0;">蓝-3 #91CAFF</p>
  <p style="background-color:#69B1FF;padding:10px;margin:0;">蓝-4 #69B1FF</p>
  <p style="background-color:#4096FF;padding:10px;margin:0;">蓝-5 #4096FF</p>
  <p style="background-color:#1677FF;padding:10px;margin:0;color:#fff;">蓝-6 #1677FF</p>
  <p style="background-color:#0958D9;padding:10px;margin:0;color:#fff;">蓝-7 #0958D9</p>
  <p style="background-color:#003EB3;padding:10px;margin:0;color:#fff;">蓝-8 #003EB3</p>
  <p style="background-color:#002C8C;padding:10px;margin:0;color:#fff;">蓝-9 #002C8C</p>
  <p style="background-color:#001D66;padding:10px;margin:0;color:#fff;">蓝-10 #001D66</p>
</div>

#### 火山 Volcano
- 1: `#FFF2E8`
- 2: `#FFD8BF`
- 3: `#FFBB96`
- 4: `#FF9C6E`
- 5: `#FF7A45`
- 6: `#FA541C`
- 7: `#D4380D`
- 8: `#AD2102`
- 9: `#871400`
- 10: `#610B00`

<div>
  <p style="background-color:#FFF2E8;padding:10px;margin:0;">火山-1 #FFF2E8</p>
  <p style="background-color:#FFD8BF;padding:10px;margin:0;">火山-2 #FFD8BF</p>
  <p style="background-color:#FFBB96;padding:10px;margin:0;">火山-3 #FFBB96</p>
  <p style="background-color:#FF9C6E;padding:10px;margin:0;">火山-4 #FF9C6E</p>
  <p style="background-color:#FF7A45;padding:10px;margin:0;">火山-5 #FF7A45</p>
  <p style="background-color:#FA541C;padding:10px;margin:0;color:#fff;">火山-6 #FA541C</p>
  <p style="background-color:#D4380D;padding:10px;margin:0;color:#fff;">火山-7 #D4380D</p>
  <p style="background-color:#AD2102;padding:10px;margin:0;color:#fff;">火山-8 #AD2102</p>
  <p style="background-color:#871400;padding:10px;margin:0;color:#fff;">火山-9 #871400</p>
  <p style="background-color:#610B00;padding:10px;margin:0;color:#fff;">火山-10 #610B00</p>
</div>

#### 金 Gold
<div>
  <p style="background-color:#FFFBE6;padding:10px;margin:0;">金-1 #FFFBE6</p>
  <p style="background-color:#FFF1B8;padding:10px;margin:0;">金-2 #FFF1B8</p>
  <p style="background-color:#FFE58F;padding:10px;margin:0;">金-3 #FFE58F</p>
  <p style="background-color:#FFD666;padding:10px;margin:0;">金-4 #FFD666</p>
  <p style="background-color:#FFC53D;padding:10px;margin:0;">金-5 #FFC53D</p>
  <p style="background-color:#FAAD14;padding:10px;margin:0;">金-6 #FAAD14</p>
  <p style="background-color:#D48806;padding:10px;margin:0;color:#fff;">金-7 #D48806</p>
  <p style="background-color:#AD6800;padding:10px;margin:0;color:#fff;">金-8 #AD6800</p>
  <p style="background-color:#874D00;padding:10px;margin:0;color:#fff;">金-9 #874D00</p>
  <p style="background-color:#613400;padding:10px;margin:0;color:#fff;">金-10 #613400</p>
</div>

#### 黄 Yellow

<div>
  <p style="background-color:#FEFFE6;padding:10px;margin:0;">黄-1 #FEFFE6</p>
  <p style="background-color:#FFFFB8;padding:10px;margin:0;">黄-2 #FFFFB8</p>
  <p style="background-color:#FFFB8F;padding:10px;margin:0;">黄-3 #FFFB8F</p>
  <p style="background-color:#FFF566;padding:10px;margin:0;">黄-4 #FFF566</p>
  <p style="background-color:#FFEC3D;padding:10px;margin:0;">黄-5 #FFEC3D</p>
  <p style="background-color:#FADB14;padding:10px;margin:0;">黄-6 #FADB14</p>
  <p style="background-color:#D4B106;padding:10px;margin:0;">黄-7 #D4B106</p>
  <p style="background-color:#AD8B00;padding:10px;margin:0;color:#fff;">黄-8 #AD8B00</p>
  <p style="background-color:#876800;padding:10px;margin:0;color:#fff;">黄-9 #876800</p>
  <p style="background-color:#614700;padding:10px;margin:0;color:#fff;">黄-10 #614700</p>
</div>

#### 青柠 Lime
<div>
  <p style="background-color:#FCFFE6;padding:10px;margin:0;">青柠-1 #FCFFE6</p>
  <p style="background-color:#F4FFB8;padding:10px;margin:0;">青柠-2 #F4FFB8</p>
  <p style="background-color:#EAFF8F;padding:10px;margin:0;">青柠-3 #EAFF8F</p>
  <p style="background-color:#D3F261;padding:10px;margin:0;">青柠-4 #D3F261</p>
  <p style="background-color:#BAE637;padding:10px;margin:0;">青柠-5 #BAE637</p>
  <p style="background-color:#A0D911;padding:10px;margin:0;">青柠-6 #A0D911</p>
  <p style="background-color:#7CB305;padding:10px;margin:0;color:#fff;">青柠-7 #7CB305</p>
  <p style="background-color:#5B8C00;padding:10px;margin:0;color:#fff;">青柠-8 #5B8C00</p>
  <p style="background-color:#3F6600;padding:10px;margin:0;color:#fff;">青柠-9 #3F6600</p>
  <p style="background-color:#254000;padding:10px;margin:0;color:#fff;">青柠-10 #254000</p>
</div>

#### 青 Cyan
<div>
  <p style="background-color:#E6FFFB;padding:10px;margin:0;">青-1 #E6FFFB</p>
  <p style="background-color:#B5F5EC;padding:10px;margin:0;">青-2 #B5F5EC</p>
  <p style="background-color:#87E8DE;padding:10px;margin:0;">青-3 #87E8DE</p>
  <p style="background-color:#5CDBD3;padding:10px;margin:0;">青-4 #5CDBD3</p>
  <p style="background-color:#36CFC9;padding:10px;margin:0;">青-5 #36CFC9</p>
  <p style="background-color:#13C2C2;padding:10px;margin:0;">青-6 #13C2C2</p>
  <p style="background-color:#08979C;padding:10px;margin:0;color:#fff;">青-7 #08979C</p>
  <p style="background-color:#006D75;padding:10px;margin:0;color:#fff;">青-8 #006D75</p>
  <p style="background-color:#00474F;padding:10px;margin:0;color:#fff;">青-9 #00474F</p>
  <p style="background-color:#002329;padding:10px;margin:0;color:#fff;">青-10 #002329</p>
</div>

#### 极客蓝 GeekBlue
<div>
  <p style="background-color:#F0F5FF;padding:10px;margin:0;">极客蓝-1 #F0F5FF</p>
  <p style="background-color:#D6E4FF;padding:10px;margin:0;">极客蓝-2 #D6E4FF</p>
  <p style="background-color:#ADC6FF;padding:10px;margin:0;">极客蓝-3 #ADC6FF</p>
  <p style="background-color:#85A5FF;padding:10px;margin:0;">极客蓝-4 #85A5FF</p>
  <p style="background-color:#597EF7;padding:10px;margin:0;">极客蓝-5 #597EF7</p>
  <p style="background-color:#2F54EB;padding:10px;margin:0;color:#fff;">极客蓝-6 #2F54EB</p>
  <p style="background-color:#1D39C4;padding:10px;margin:0;color:#fff;">极客蓝-7 #1D39C4</p>
  <p style="background-color:#10239E;padding:10px;margin:0;color:#fff;">极客蓝-8 #10239E</p>
  <p style="background-color:#061178;padding:10px;margin:0;color:#fff;">极客蓝-9 #061178</p>
  <p style="background-color:#030852;padding:10px;margin:0;color:#fff;">极客蓝-10 #030852</p>
</div>

#### 品红 Magenta
<div>
  <p style="background-color:#FFF0F6;padding:10px;margin:0;">品红-1 #FFF0F6</p>
  <p style="background-color:#FFD6E7;padding:10px;margin:0;">品红-2 #FFD6E7</p>
  <p style="background-color:#FFADD2;padding:10px;margin:0;">品红-3 #FFADD2</p>
  <p style="background-color:#FF85C0;padding:10px;margin:0;">品红-4 #FF85C0</p>
  <p style="background-color:#F759AB;padding:10px;margin:0;">品红-5 #F759AB</p>
  <p style="background-color:#EB2F96;padding:10px;margin:0;">品红-6 #EB2F96</p>
  <p style="background-color:#C41D7F;padding:10px;margin:0;color:#fff;">品红-7 #C41D7F</p>
  <p style="background-color:#9E1068;padding:10px;margin:0;color:#fff;">品红-8 #9E1068</p>
  <p style="background-color:#780650;padding:10px;margin:0;color:#fff;">品红-9 #780650</p>
  <p style="background-color:#520339;padding:10px;margin:0;color:#fff;">品红-10 #520339</p>
</div>

#### 紫 Purple
<div>
  <p style="background-color:#F9F0FF;padding:10px;margin:0;">紫-1 #F9F0FF</p>
  <p style="background-color:#EFDBFF;padding:10px;margin:0;">紫-2 #EFDBFF</p>
  <p style="background-color:#D3ADF7;padding:10px;margin:0;">紫-3 #D3ADF7</p>
  <p style="background-color:#B37FEB;padding:10px;margin:0;">紫-4 #B37FEB</p>
  <p style="background-color:#9254DE;padding:10px;margin:0;">紫-5 #9254DE</p>
  <p style="background-color:#722ED1;padding:10px;margin:0;color:#fff;">紫-6 #722ED1</p>
  <p style="background-color:#531DAB;padding:10px;margin:0;color:#fff;">紫-7 #531DAB</p>
  <p style="background-color:#3D0C8C;padding:10px;margin:0;color:#fff;">紫-8 #3D0C8C</p>
  <p style="background-color:#2A0870;padding:10px;margin:0;color:#fff;">紫-9 #2A0870</p>
  <p style="background-color:#1D064F;padding:10px;margin:0;color:#fff;">紫-10 #1D064F</p>
</div>
 
#### 绿 Green
<div>
  <p style="background-color:#F6FFED;padding:10px;margin:0;">绿-1 #F6FFED</p>
  <p style="background-color:#D9F7BE;padding:10px;margin:0;">绿-2 #D9F7BE</p>
  <p style="background-color:#B7EB8F;padding:10px;margin:0;">绿-3 #B7EB8F</p>
  <p style="background-color:#95DE64;padding:10px;margin:0;">绿-4 #95DE64</p>
  <p style="background-color:#73D13D;padding:10px;margin:0;">绿-5 #73D13D</p>
  <p style="background-color:#52C41A;padding:10px;margin:0;">绿-6 #52C41A</p>
  <p style="background-color:#389E0D;padding:10px;margin:0;color:#fff;">绿-7 #389E0D</p>
  <p style="background-color:#237804;padding:10px;margin:0;color:#fff;">绿-8 #237804</p>
  <p style="background-color:#135200;padding:10px;margin:0;color:#fff;">绿-9 #135200</p>
  <p style="background-color:#092B00;padding:10px;margin:0;color:#fff;">绿-10 #092B00</p>
</div>
 
#### 橙 Orange
<div>
  <p style="background-color:#FFF7E6;padding:10px;margin:0;">橙-1 #FFF7E6</p>
  <p style="background-color:#FFE7BA;padding:10px;margin:0;">橙-2 #FFE7BA</p>
  <p style="background-color:#FFD591;padding:10px;margin:0;">橙-3 #FFD591</p>
  <p style="background-color:#FFC069;padding:10px;margin:0;">橙-4 #FFC069</p>
  <p style="background-color:#FFA940;padding:10px;margin:0;">橙-5 #FFA940</p>
  <p style="background-color:#FA8C16;padding:10px;margin:0;">橙-6 #FA8C16</p>
  <p style="background-color:#D46B08;padding:10px;margin:0;color:#fff;">橙-7 #D46B08</p>
  <p style="background-color:#AD4E00;padding:10px;margin:0;color:#fff;">橙-8 #AD4E00</p>
  <p style="background-color:#873800;padding:10px;margin:0;color:#fff;">橙-9 #873800</p>
  <p style="background-color:#612500;padding:10px;margin:0;color:#fff;">橙-10 #612500</p>
</div>
 
#### 红 Red
<div>
  <p style="background-color:#FFF1F0;padding:10px;margin:0;">红-1 #FFF1F0</p>
  <p style="background-color:#FFCCC7;padding:10px;margin:0;">红-2 #FFCCC7</p>
  <p style="background-color:#FFA39E;padding:10px;margin:0;">红-3 #FFA39E</p>
  <p style="background-color:#FF7875;padding:10px;margin:0;">红-4 #FF7875</p>
  <p style="background-color:#FF4D4F;padding:10px;margin:0;">红-5 #FF4D4F</p>
  <p style="background-color:#F5222D;padding:10px;margin:0;">红-6 #F5222D</p>
  <p style="background-color:#CF1322;padding:10px;margin:0;color:#fff;">红-7 #CF1322</p>
  <p style="background-color:#A8071A;padding:10px;margin:0;color:#fff;">红-8 #A8071A</p>
  <p style="background-color:#820014;padding:10px;margin:0;color:#fff;">红-9 #820014</p>
  <p style="background-color:#5C0011;padding:10px;margin:0;color:#fff;">红-10 #5C0011</p>
</div>
 
 
