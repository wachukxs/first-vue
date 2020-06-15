<template>
  <!-- 
      Vue has a special syntax called event modifiers 
      that can handle this for us right in our template.
      
      Modifiers are appended to the end of an event with 
      a dot like so: @event.modifier. Here is a list of event modifiers:...
    
  -->
  <form v-on:submit.prevent="onSubmit">
    <label for="new-todo-input">What do you want to do?</label>
    <input
      v-model.lazy.trim="label"
      type="text"
      name="todo-input"
      id="new-todo-input"
      autocomplete="off"
    />

    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  /**The methods property holds any methods we might need to call in our component.
   * When referenced, methods are fully run, so it's not a good idea to use them
   * to display information inside the template. For displaying data that comes
   * from calculations, you should use a computed property
   * */
  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit("todo-added", this.label);
      this.label = "";
      // console.log("new todo item added", this.label);
    }
  },
  data() {
    return {
      label: ""
    };
  }
};
</script>
