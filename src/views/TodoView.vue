<template>
  <div id="todoView" class="todo-view">
    <TodoForm/>
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm";
export default {
  name: "TodoView",
  components: {
    TodoForm,
  }
}
</script>

<style scoped lang="scss"></style>
