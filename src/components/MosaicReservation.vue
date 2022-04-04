<script setup lang="ts">
import Square from './Square.vue';

</script>

<template>
  <h2>January</h2>
  <div class="mosaic-container">
    <Square class="vip-square" />
    <Square class="normal-square" />
    <Square class="vip-square" />
    <Square class="vip-square" />
    <Square class="normal-square" />
    <Square class="vip-square" />
  </div>
</template>

<style scoped>
.vip-square {
  background-color: #810036;
}

.normal-square {
  background-color: #002c8a;
}

.mosaic-container {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 16px;
}

.badge {
  box-shadow: 0, 8px, black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 44px;
}
</style>