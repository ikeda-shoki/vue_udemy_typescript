<script setup lang="ts">
  // ref は Vue3 で読み込むことが可能なメソッドで、変動する変数に使用する。※値を使用する際は value を使用する必要がある
  // ref と同様の役割を持つ reactive があり、reactive は引数にオブジェクトを取る
  // reactive はオブジェクトを渡す必要があり、分割してプロパティを渡すとリアクティブ性が失われるため、toRefs を使用する必要がある。
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

    <!-- vue で使用可能な component タグを使用することで :is で指定したコンポーネントを表示することが可能
    　　　下記では getContent() メソッドを使用して条件によってコンポーネントを変更している為、条件に合うコンポーネントが表示される -->
    <component :is="getContent()" />

    <button @click="onClickButton()">Change</button>

    <teleport to="body">
      <!-- 上記の teleport で囲まれている下記の要素を to で指定した位置移動させることが可能
           そのため、下記の dialog は body 直下へ配置されることになる -->
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