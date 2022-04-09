<script setup lang="ts">
  import Reservation from './components/Reservation.vue';
  import TodoLists from './components/TodoList.vue'

  import { provide } from 'vue'

  import { todos, addTodo } from './useTodo'

  // provide を使用すると子のコンポーネントにキーを指定するとオブジェクトを渡せる
  // 下記ではtodosというキーで上記でインポートしたtodosを子コンポーネントに渡せる(TodoLists)
  // provide('todos', todos);
  // provide('addTodo', addTodo);

  // 難しい書き方で引き渡す場合
  provide('todos', todos);
</script>

<template>
  <!-- <Reservation /> -->
  <TodoLists />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
