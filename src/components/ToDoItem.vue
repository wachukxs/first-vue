<template>
    <div><!-- Vue templates are currently only allowed a single root element, We'll use this <div> for that root element -->
    <input v-bind:id="id" type="checkbox" v-bind:checked="isDone" />
    <label v-bind:for="id">{{ label }}</label>
  </div>
</template>

<style>

</style>

<script>
export default {

    /**props serve as one-way data binding */

    
    /**The data property is where you can manage local state in a component, it lives inside the component object alongside the props property and has the following structure: */
    props: {
      label: { required: true, type: String },
      done: { default: false, type: Boolean },
      id: { required: true, type: String }
    },
    data() {
      return {
        isDone: this.done
      };
    }
}

/**
  What we need is some component state. 
  This can be achieved by adding props to our component. 
  You can think of props as being similar to inputs in a function. 
  The value of a prop gives components an initial state 
  that affects their display.
 */
</script>