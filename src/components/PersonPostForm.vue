<script setup lang="ts">
  import { ref } from 'vue';

  const name = ref<string>('');
  const age = ref<number>(0);

  const emit = defineEmits(['register']);

  const register = () => {
    const person = { id: Math.random(), name: name.value, age: age.value };
    emit('register', person);
  }

  const color = 'white';

</script>

<template>
  <div class="form-container">
    <div class="input-container">
      <span>name:</span>
      <input class="input-name" v-model="name"/>
    </div>
    <div class="input-column">
      <span>age:</span>
      <input class="input" v-model="age" type="number"/>
    </div>

    <button class="register-button" @click="register()">登録</button>
  </div>
</template>

<style scoped>
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 241, 226);
    padding: 24px 0;
    width: 50%;
    margin-bottom: 12px;
    border-radius: 4px;
  }

  .input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 20px;
  }

  .input-column {
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .input-name {
    background-color: v-bind(color);
  }

  input {
    width: 120px;
    padding: 5px 8px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }
</style>