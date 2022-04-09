// vueで使用するrefをTSでインポートする
import { ref, InjectionKey } from 'vue';

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

type TodosType = typeof todos;

// Symbolとは → 一意のプロパティを生成するもの
// 値を確認することは出来ないが、他のものとは全く別物であるプロパティである。
// 値を確認することが出来ない為、IDなどには使用することが出来ない。
// 下記の例で行くと、useTodosという文字列を定義しているが、他のuseTodosと定義されている文字列とは違う文字列として認証されるようなもの

// InjectionKey は Symbol しか受け取らない型で固有(値が同じでも他のものと同一化しない)の値を受け取る
export const todoKey: InjectionKey<TodosType> = Symbol('useTodos')
