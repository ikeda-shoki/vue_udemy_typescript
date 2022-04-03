<script setup lang="ts">

</script>

<template>
  <div class="badge">
    <slot />
  </div>
</template>

<style scoped>
  .badge {
    box-shadow: 2px, 8px, 4px, black;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 30px;
    font-weight: bold;
  }
</style>