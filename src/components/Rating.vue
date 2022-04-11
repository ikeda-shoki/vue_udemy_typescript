<script setup lang="ts">
  import { ref } from 'vue'

  // カスタムコンポーネントでv-modelを使用する為の書き方
  // 下記の2つの書き方は決まっているもの
  // propsは親から値を受け取るもの
  // emitは親へ値を渡すもの
  const props = defineProps(['modelValue']);
  const emits = defineEmits(['update:modelValue'])

  const isActiveButton = ref<string>(props.modelValue)

  const onClick = (buttonType: string) => {
    isActiveButton.value = buttonType;
    emits('update:modelValue', isActiveButton.value);
  }
</script>

<template>
  <ul>
    <li>
      <!-- type="button"でsubmitボタンではないことを定義している為、buttonを押下しても画面遷移しない -->
      <button :class="{ active: isActiveButton === 'bad' }" @click="onClick('bad')" type="button">Bad</button>
    </li>
    <li>
      <button :class="{ active: isActiveButton === 'average' }" @click="onClick('average')" type="button">Average</button>
    </li>
    <li>
      <button :class="{ active: isActiveButton === 'great' }" @click="onClick('great')" type="button">Great</button>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
  }

  li {
    margin: 0 1rem;
    border: 1px solid gray;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .active {
    color: rgb(216, 88, 110)
  }
</style>