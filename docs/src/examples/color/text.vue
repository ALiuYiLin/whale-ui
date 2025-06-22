<template>
  <div class="color-demos">
    <div class="color-demo" v-for="item in type" :key="item" :style="getBgClolrStyle(item)">
      <div class="color-info">
          <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const type = ['primary','regular','secondary','placeholder','disabled']

const getColorByType = (type:string)=>{
  return '--wl-text-color-'+type
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
  color: white;
}
</style>