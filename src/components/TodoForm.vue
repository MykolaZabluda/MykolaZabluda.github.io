<template>
  <div id="todoForm" class="todo-view">
    <h1 class="hello">Hello {{username}}!</h1>
    <div class="container" id="elzero-app">
      <form>
        <input type="text" placeholder="Type Your Task" v-model="taskText"/>
        <button @click.prevent="addTask" :disabled="!taskText">Add Task</button>
        <button class="delete-all" v-if="tasks.length > 1" @click.prevent="deleteAll">Delete All</button>
      </form>
      <div class="tasks-list" v-for="(task, index) in tasks" v-bind:key="index">
        <input type="text"
               v-bind:id="index.toString()"
               class="task-box"
               :disabled="true"
               v-on:keyup.enter="editTask(index, task.text)"
               v-model="task.text">
        <div class="edit" @click="enableEditingTask(index)">Edit</div>
        <div class="delete" @click="deleteTask(index)">Delete</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      tasks: [],
      idCount: 0,
      taskText: "",
      username: "Admin",
      isDisabledInput: true,
    }
  },
  methods: {
    addTask: function() {
      this.idCount += 1;
      this.tasks.push({
        id: this.idCount,
        text: this.taskText,
      });
      this.taskText = "";
    },
    enableEditingTask: function (index) {
      this.isDisabledInput = !this.isDisabledInput;
      document.getElementById(index).disabled = this.isDisabledInput;
    },
    editTask: function (index, newText) {
      this.tasks[index].text = newText;
      this.enableEditingTask(index);
      console.log(this.tasks);
    },
    deleteTask: function(index) {
      this.tasks.splice(index, 1);
    },
    deleteAll: function() {
      this.tasks = [];
    },
  }
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.hello {
  text-align: center;
}

.container {
  text-align: center;

  form {
    margin: 20px auto 10px;
    width: 500px;
    overflow: hidden;

    input {
      background-color: #f7f7f7;
      border: 1px solid #eee;
      margin-bottom: 15px;
      width: calc(100% - 210px);
      height: 46px;
      padding: 10px;
      float: left;
      border-radius: 10px;

      &:focus {
        outline: none;
      }
    }

    button {
      width: 90px;
      height: 46px;
      padding: 10px;
      background-color: #2196f3;
      color: #fff;
      border-color: transparent;
      cursor: pointer;
      float: left;
      margin-left: 5px;
      border-radius: 10px;

      &:disabled {
        opacity: 0.4;
        cursor: no-drop;
      }

      &:focus {
        outline: none;
      }

      &.delete-all {
        width: 110px;
        background-color: #f44336;
        border-radius: 10px;
      }
    }
  }

  .tasks-list {
    display: flex;
    flex-direction: row;
    width: 500px;
    margin: 0 auto;

    .task-box {
      padding: 15px;
      text-align: left;
      margin-bottom: 15px;
      margin-right: 5px;
      width: calc(100% - 86px);
      cursor: pointer;
      float: left;
      border-radius: 10px;
    }

    .edit {
      float: right;
      width: 80px;
      background-color: #0076C0;
      color: #fff;
      border-color: transparent;
      padding: 1px 10px;
      cursor: pointer;
      height: 48px;
      line-height: 51px;
      margin-right: 5px;
      border-radius: 10px;
    }

    .delete {
      float: right;
      width: 80px;
      background-color: #f44336;
      color: #fff;
      border-color: transparent;
      padding: 1px 10px;
      cursor: pointer;
      height: 48px;
      line-height: 51px;
      border-radius: 10px;
    }
  }
}

.links-urls {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;

  .link {
    padding: 10px 20px;
    display: block;
    background-color: #EEE;
    margin-bottom: 10px;
    text-decoration: none;
    color: #777;
  }
}
</style>
