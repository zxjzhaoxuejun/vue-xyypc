<template>
  <div>
    <h3>{{title}}</h3>
    <div v-if="isShow">{{sunTitle}}</div>
    <input placeholder="请输入" v-model="myTodo" @keyup.enter="handleAdd" />
    <button @click="handleAdd">添加</button>
    <button @click="reset">清空</button>
    <ul>
      <li @click="toggle(index)" :key="index" v-for="(todo,index) in todos" :class="{dono:todo.dono}">{{todo.text}}</li>
    </ul>
    <p>{{remain}}/{{todos.length}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'VUE HELLO',
      sunTitle: 'vue 小程序',
      isShow: true,
      myTodo: '',
      todos: [
        {
          text: '吃饭',
          dono: false
        },
        {
          text: '上班',
          dono: false
        },
        {
          text: '写代码',
          dono: false
        }
      ]
    }
  },
  computed: {
    remain() {
      return this.todos.filter(v => !v.dono).length
    }
  },
  methods: {
    handleAdd() {
      this.todos.push({ text: this.myTodo, dono: false })
      this.myTodo = ''
    },
    toggle(i) {
      this.todos[i].dono = !this.todos[i].dono
    },
    reset() {
      this.todos = []
    }
  }
}
</script>
<style lang="scss">
.dono {
  text-decoration: line-through;
  color: red;
}
</style>
