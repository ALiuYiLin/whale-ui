<template>
  <div class="color-primary">
    <div class="color-card" v-for="i in 9" :style="getBgClolrStyle(i)">
      <div v-if="i === 1">
          <span>Color primary</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cssConfig } from 'whale-ui'

type ValidKey = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

const getBgClolrStyle = (index:number)=>{
  if(index==1)
    return {
      'background-color':cssConfig.color.primary.default
  }
  else 
    return {
    'background-color':cssConfig.color.primary.light[String(index) as ValidKey]
  } 
}

</script>

<style scoped>
.color-primary{
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: row;
  width: 50%;
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