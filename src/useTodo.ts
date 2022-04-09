// vueで使用するrefをTSでインポートする
import { ref } from 'vue';

// Todo型を定義する オブジェクトを定義する際はtypeを使用する
type Todo = {
  id: number,
  title: string
}

const defaultTodos = [
  {
    id: 0,
    title: 'first',
  },
  {
    id: 1,
    title: 'second',
  }
]

// 外から変数を使用する場合は、exportを使用する
// export const todos = ref<Todo[]>(defaultTodos);

// export const addTodo = (title: string) => {
//   const newTodo: Todo = {
//     id: Math.random(),
//     title,
//   }
//   todos.value.push(newTodo);
// }

// 上記の書き方を少し難しいですが簡潔に書くことも可能。。。
export const todos = (() => {
  const todos = ref<Todo[]>(defaultTodos);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Math.random(),
      title,
    }
    todos.value.push(newTodo);
  }

  return { todos, addTodo }
})()
