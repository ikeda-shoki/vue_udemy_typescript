<script setup lang="ts">
  import { ref } from 'vue';
  import Badge from './Badge.vue';
  import ReservationList from './ReservationList.vue';
  import MosaicReservation from './MosaicReservation.vue';

  const isListVisible = ref<boolean>(true);

  const isDialogOpen = ref<boolean>(false);

  const onClickButton = () => {
    // isListVisible.value = !isListVisible.value;
    isDialogOpen.value = !isDialogOpen.value;
  }

  const getContent = () => {
    if (isListVisible.value) {
      return ReservationList;
    } else {
      return MosaicReservation;
    }
  }
</script>

<template>
  <div class="container">
    <Card class="menu-card">
      <span>Badges</span>
      <div class="badges">
        <Badge class="vip-badge">
          <span>VIP</span>
        </Badge>
        <Badge class="normal-badge">
          <span>NORMAL</span>
        </Badge>
      </div>
    </Card>

    <component :is="getContent()" />

    <button @click="onClickButton()">Change</button>

    <teleport to="body">
      <dialog :open="isDialogOpen" class="dialog">
        <span>Dialog</span>
      </dialog>
    </teleport>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-card {
    width: 300px;
    height: 80px;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
  }

  .badges {
    display: flex;
    justify-content: space-around;
    width: 250px;
  }

  .vip-badge {
    background-color: #810036;
    color: white;
  }

  .normal-badge {
    background-color: #002c8a;
    color: white;
  }

  .dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 200px;
    width: 400px;
    margin: auto;
    background-color: aliceblue;
  }
</style>