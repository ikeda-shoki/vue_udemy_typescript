<script setup lang="ts">
import { ref, watch } from 'vue';
import Rating from './Rating.vue'

const userName = ref<string>('');

// カスタムディレクティブの作り方
// v-focus
// 上記のカスタムディレクティブを作成する際には下記のように vFocus という命名規則を行う必要がある

// mounted は画面にVueがHTMLにマウントされる際に挙動する
const vFocus = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    // el に対して focus() メソッドでinputタグに自動でフォーカス(選択)される
    el.focus();

    // modifiersはディレクティブに追加の処理をする役割を持つ
    // 定義の仕方は下記のように、上で引数に受けっているbindingのmodifiersオブジェクトに好きな文字列を定義することで
    // カスタム修飾詞を定義することが出来る
    // 下記ではvFocusディレクティブを定義しているディレクティブに下記のstylePinkを修飾することで色をビンクにすることが出来る
    if (binding.modifiers.stylePink) {
      el.style.backgroundColor = 'pink';
    }
  }
}

const onSubmit = () => {
  console.log('submit');
  console.log(userName.value);
  console.log(interest.value);
  console.log(radios.value);
  console.log(ratings.value);

  interest.value = [];
}

// section 54
// selectタグの初期値の入れ方
// 値となる文字列を入れておき、v-modelで定義し、双方向バインディングしておく
// 選択肢にない値を入れるとセレクトボックスでは空白になる
const from = ref<string>('japan')

// チェックボックス
// 配列をrefで定義する際は下記のように書くこと
// 下記のように定義した後、HTMLのinputタグにvalueを設定することでvalue値がinterest内に追加されていく
// チェックボックスが単一の場合は boolean 型を採用し、チェックが付いてる時は true 付いてない時は false で定義する
// 例) const interest = ref<boolean>(false) 初期値がチェック無しになる
// チェックボックスが複数の場合は下記のように配列を定義し、HTMLのinputタグに指定したvalueを配列の文字列に入れることで初期値を入れる
// 下記のように react, vue を配列内に入れていると、react, vue が初めからチェックされている状態になる
const interest = ref(['react', 'vue']);

// Vue で使用される warch() は第一引数に入れている値が監視対象になり、ページ内で値が変更された時に
// 第二引数で使用されているメソッドが起動する仕組み
watch (interest, () => { console.log('interest', interest.value) })

// ラジオボタン
// 基本的に選択される内容が一つの為、扱いはセレクトタグと同様の扱い方をする
const radios = ref<string>('book');
watch (radios, () => { console.log('radios', radios.value) })

// section55 カスタムコンポーネントでv-modelを使用する
const ratings = ref<string>('');

</script>

<template>
  <form>
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model="userName" v-focus.stylePink/>
    </div>
    <div class="form-control">
      <label for="age">Your Age</label>
      <input id="age" name="age" type="number"/>
    </div>
    <div class="form-control">
      <label for="from">Where Are you from?</label>
      <select id="from" name="from" v-model="from">
        <option value="japan">Japan</option>
        <option value="china">China</option>
        <option value="others">Others</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-react" name="interest" type="checkbox" value="react" v-model="interest"/>
        <label for="interest-react">React.js</label>
      </div>
      <div>
        <input id="interest-vue" name="interest" type="checkbox" value="vue" v-model="interest"/>
        <label for="interest-vue">Vue.js</label>
      </div>
      <div>
        <input id="interest-angular" name="interest" type="checkbox" value="angular" v-model="interest"/>
        <label for="interest-angular">Angular.js</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="radios" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-books" name="how" type="radio" value="book" v-model="radios"/>
        <label for="how-books">Books</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="radios"/>
        <label for="how-other">Other</label>
      </div>
    </div>
    <div>
      <Rating v-model="ratings"/>
    </div>
    <div>
      <!-- prevent → modifiersの一種 処理に追加の処理を行うようなもの -->
      <button @click.prevent="onSubmit()">Save Data</button>
    </div>
  </form>
</template>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>