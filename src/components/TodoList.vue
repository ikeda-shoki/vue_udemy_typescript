<script setup lang="ts">
// 下記のinjectでprovideで指定された値を受け取ることが可能
import { inject } from 'vue';

// const todos = inject('todos');
// const _addTodo = inject('addTodo');

// 難しい書き方での読み込み方
// addTodo: _addTodo の書き方で _addTodo を変数名として使用して provide で引き継いだ
// todos 内の addTodoメソッドを使用することが出来る
const { todos, addTodo: _addTodo } = inject('todos');

const addTodo = (title: string) => {
  _addTodo(title);
}

</script>

<template>
  <div>
    <ul :style="{ listStyle: 'none' }">
      <li
        :style="{ backgroundColor: 'aliceblue', marginBottom: '10px' }"
        v-for="todo in todos"
      >{{ todo.title }}</li>
    </ul>
    <button @click="addTodo('add!')">Add</button>
  </div>
</template>

<style scoped>
</style>