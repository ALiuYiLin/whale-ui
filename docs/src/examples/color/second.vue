<template>
  <div class="color-demos">
    <div class="color-demo" v-for="item in type" :key="item">
      <div class="color-card" v-for="i in 9" :style="getBgClolrStyle(item,i)">
        <div v-if="i === 1">
          <span>Color {{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cssConfig } from 'whale-ui';
type ValidType = 'success' | 'warning' | 'danger' |'error' | 'info' 
type ValidKey = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

const type = ['success','warning','danger','error','info']

const getBgClolrStyle = (type:string,index:number)=>{
  if(index==1)
    return {
      'background-color':cssConfig.color[type as ValidType].default
    }
  else 
    return {
    'background-color':cssConfig.color[type as ValidType].light[String(index) as ValidKey]
  }  
}

</script>

<style scoped>
.color-demos{
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
.color-demo{
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: row;
}

.color-card:nth-child(1){
  grid-column: 1 / 9 ;
  height: 120px;
  position: relative;
}
.color-card:nth-child(1) span{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  color: white;
}

.color-card:not(.color-card:nth-child(1)){
  grid-row: 2;
  aspect-ratio: 1;
}

</style>