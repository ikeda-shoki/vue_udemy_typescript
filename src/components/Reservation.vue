<script setup lang="ts">
  import Card from './Card.vue';
  import Badge from './Badge.vue';
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

    <Card class="reservation-card">
      <span>John Wick</span>
      <Badge class="vip-badge">
        <span>VIP</span>
      </Badge>
    </Card>

    <Card class="reservation-card">
      <span>Yamamoto Taiki</span>
      <Badge class="normal-badge">
        <span>NORMAL</span>
      </Badge>
    </Card>

    <Card class="reservation-card">
      <span>ISHIZAKI AYAKA</span>
      <Badge class="vip-badge">
        <span>VIP</span>
      </Badge>
    </Card>
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

  .reservation-card {
    width: 400px;
    height: 60px;
    background-color: rgb(255, 212, 147);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    padding: 0px 10px;
    border-radius: 8px;
    box-shadow: 4px 4px 4px rgb(211, 211, 211);
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
</style>