<template>
  <div class="color-demos">
    <div class="color-demo" v-for="item in type" :key="item" :style="getBgClolrStyle(item)">
      <div class="color-info">
          <p v-if="item === ''">default</p>
          <p v-else>{{ item }}</p>
      </div>
    </div>
    <div class="box" :style="{'background-color':'var(--wl-border-color)'}"></div>
  </div>
</template>

<script lang="ts" setup>
const type = ['','light','lighter','extra-light','dark','darker']

const getColorByType = (type:string)=>{
  if(type === '') return '--wl-border-color'
  return '--wl-border-color-'+type
}

const getBgClolrStyle = (type:string)=>{
  return {
    'background-color':`var(${getColorByType(type)})`
  }
}
</script>

<style scoped>
.color-demos{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 20px 20px ;
}
.color-demo{
  aspect-ratio: 1;
  position: relative;
}

.color-demo div{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  color: black;
}
.box{
  width: 200px;
  height: 200px;
}
</style>