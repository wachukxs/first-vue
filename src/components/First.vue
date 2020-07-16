<template>
  <div id="first">
    <h1>To-Do list</h1>
    <to-do-form v-on:todo-added="addToDo"></to-do-form>
    <ul>
      <li v-for="item in ToDoItems" v-bind:key="item.id">
        <to-do-item v-bind:label="item.label" v-bind:id="item.id" v-bind:done="item.done"></to-do-item>
      </li>
    </ul>
  </div>
  <!-- 
    Note that the component file name 
    and its representation in JavaScript 
    is always in upper camel case (e.g. ToDoList), 
    and the equivalent custom element 
    is always in hyphenated lower case (e.g. <to-do-list>).
   -->
</template>

<script>
import ToDoItem from './ToDoItem.vue';
import uniqueId from 'lodash.uniqueid';
import ToDoForm from "./ToDoForm";

export default {
  name: 'First',
  components: {
    ToDoItem,
    ToDoForm
  },
  data() {
    return {
      ToDoItems: [
        { id: uniqueId('todo-'), label: 'Learn Vue', done: false },
        { id: uniqueId('todo-'), label: 'Create a Vue project with the CLI', done: true },
        { id: uniqueId('todo-'), label: 'Have fun', done: true },
        { id: uniqueId('todo-'), label: 'Create a to-do list', done: false }
      ]
    };
  },
  methods: {
    addToDo(toDoLabel) {
      console.log('to do added', toDoLabel);
      this.ToDoItems.push({id:uniqueId('todo-'), label: toDoLabel, done: false});
    }
  }
}
</script>

<style>
#first {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
