<script setup lang="ts">
import Reservation from './components/Reservation.vue';
import TodoLists from './components/TodoList.vue'
import modal from './components/Modal.vue';

import { provide, ref } from 'vue'

// import { todos, addTodo } from './useTodo'

import { todos, todoKey } from './useTodo';
import UserList from './components/UserList.vue';

// provide を使用すると子のコンポーネントにキーを指定するとオブジェクトを渡せる
// 下記ではtodosというキーで上記でインポートしたtodosを子コンポーネントに渡せる(TodoLists)
// provide('todos', todos);
// provide('addTodo', addTodo);

// 難しい書き方で引き渡す場合
// provide('todos', todos);

// InjectionKeyを使用して、引き渡す場合
provide(todoKey, todos);

// セクション10
// import Form from './components/Form.vue';

// セクション11
// import FormAnother from './components/FormAnother.vue';

// セクション12
const animatingCircle = ref(false)
const paragraphVisible = ref(false)
const dialogIsVisible =  ref(false)

const animateCircle = () => {
  animatingCircle.value = true;
}
const toggleParagraph = () => {
  paragraphVisible.value = !paragraphVisible.value;
}
const toggleModal = () => {
  dialogIsVisible.value = !dialogIsVisible.value;
}
</script>

<template>
  <!-- <Reservation /> セクション9 -->
  <!-- <TodoLists /> セクション10 -->
  <!-- <Form /> セクション10 v-modelについてと連携、modifiers(修飾詞) -->
  <!-- <FormAnother /> セクション11 HTTPリクエストを扱う -->
  <div class="container">
    <UserList></UserList>
  </div>

  <div class="container">
    <div class="circle" :class="{ animate: animatingCircle }"></div>
    <button @click="animateCircle">Animate</button>
  </div>

  <div class="container">
    <!-- vueでアニメーションを使用する場合にtransitionタグでアニメーションさせたい要素を囲む -->
    <!-- 複数のtransitionがある場合は、transitionに名前をつける -->
    <transition name="paragraph">
      <p v-if="paragraphVisible">Paragraph</p>
    </transition>
    <transition>
      <p v-if="paragraphVisible">Paragraph</p>
    </transition>
    <button @click="toggleParagraph">Switch</button>
  </div>

  <modal :open="dialogIsVisible">
    <p>This is a test Modal</p>
    <button @click="toggleModal">Close</button>
  </modal>

  <div class="container">
    <button @click="toggleModal">Modal</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* セクション10 */
/* * {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #292929;
} */

/* セクション12 */
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #180081;
  border-radius: 30px;
  background-color: #000981;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #0b64a8;
  border-color: #0b64a8;
}

.circle {
  width: 8rem;
  height: 8rem;
  background-color: #2c5b8e;
  margin-bottom: 2rem;
  border-radius: 4rem;
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

/* 下記の3つがtransitionタグ下で自動で付与されるcss */
/* .v-enter-from {
  アニメーションの始まり
  opacity: 0;
  transform: translateY(-30px);
} */

/* .v-enter-to {
  アニメーションの終わり
  opacity: 1;
  transform: translateY(0);
}

.v-enter-active {
  アニメーションの最中
  transition: all 1s ease-out;
} */

/* transitonに名前が付けられている場合、下記のようにvをnameと変換したcssが適用される */
.paragraph-enter-from {
  /* アニメーションの始まり */
  opacity: 0;
  transform: translateY(-30px);
}

.paragraph-enter-to {
  /* アニメーションの終わり */
  opacity: 1;
  transform: translateY(0);
}

.paragraph-enter-active {
  /* アニメーションの最中 */
  transition: all 1s ease-out;
}

.animate {
  /* transform: translateX(100px); */

  animation: fade .3s ease-out forwards;
}

@keyframes fade {
  0% {
    transform: translateX(0);
  }

  70% {
    transform: translateX(-90px);
  }

  100% {
    transform: translateX(-100px);
  }
}
</style>
