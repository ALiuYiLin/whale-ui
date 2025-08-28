<template>
  <div class="tooltip-example">
    <wl-row :gutter="20">
      <wl-col :span="6" v-for="tooltipType in tooltipTypes">
        <wl-tooltip  :content="tooltipType" :type="tooltipType">
          <wl-button>{{ tooltipType }}</wl-button>
        </wl-tooltip>
      </wl-col>
    </wl-row>
  </div>
</template>

<script lang="ts" setup>
import { tooltipTypes } from '@whale-ui/components';
import { WlTooltip,WlButton,WlRow,WlCol } from 'whale-ui';
</script>

<style scoped>
.wl-row {
  gap: 30px 0px;
}

</style>