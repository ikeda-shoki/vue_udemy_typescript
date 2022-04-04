<script setup lang="ts">
</script>

<template>
  <div class="square">
    <slot></slot>
  </div>
</template>

<style scoped>
.square {
  /* box-shadow: 0, 8px, black; */
  /* border-radius: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
}
</style>