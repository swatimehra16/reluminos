<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="inputVal" label="Add task!"> </v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-card-title
          ><v-btn color="primary" @click.prevent="addTask"
            ><v-icon dark> mdi-plus </v-icon> Add</v-btn
          ></v-card-title
        ></v-col
      >
      <v-col cols="6">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-radio-group v-model="filterBy" row @change="filterStatus">
          <v-radio id="done" label="Done" value="done"></v-radio>
          <v-radio id="undone" label="Undone" value="undone"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="auto"><v-btn @click="clearFilter">Clear</v-btn></v-col>
    </v-row>

    <v-data-table :headers="headers" :items="tableData" :search="search">
      <template #[`item.status`]="{ item }">
        <v-btn small @click="toggleTodo(item)">
          {{ item.status }}
        </v-btn>
      </template>
      <template #[`item.actions`]="{ item }">
        <v-icon small @click="removeTodo(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      // todos: [
      //   { task: 'Test Task 1', status: 'done' },
      //   { task: 'Test Task 2', status: 'undone' },
      //   { task: 'Test Task 3', status: 'undone' },
      //   { task: 'New Task 1', status: 'done' },
      //   { task: 'New Task 2', status: 'undone' },
      // ],
      tableData: [],
      search: '',
      inputVal: '',
      filterBy: null,

      headers: [
        { text: 'Task', value: 'task' },
        { text: 'Status', value: 'status' },
        { text: 'Action', value: 'actions', sortable: false },
      ],
    }
  },

  computed: {
    todos() {
      // return this.$store.getters.todos
      const newTodo = this.$store.getters.todos.filter((item) => {
        return item.user === this.$store.getters.loggedInUser
      })
      return newTodo
    },
  },
  watch: {
    todos(newValue) {
      this.tableData = newValue
    },
  },
  mounted() {
    this.tableData = this.todos
    console.log(this.tableData)
  },

  methods: {
    addTask() {
      if (this.inputVal) {
        this.$store.dispatch('addTodo', {
          task: this.inputVal,
          user: this.$store.getters.loggedInUser,
          status: 'undone',
          id: Math.floor(Math.random() * 50 + 1),
        })
      }
      this.inputVal = ''
    },
    removeTodo(item) {
      this.$store.dispatch('removeTodo', item)
    },
    toggleTodo(item) {
      console.log(item)
      this.$store.dispatch('toggleTodo', item)
    },
    filterStatus() {
      const newTodo = this.todos.filter((item) => {
        return item.status === this.filterBy
      })
      this.tableData = newTodo
      console.log(this.tableData)
    },
    clearFilter() {
      this.filterBy = null
      this.tableData = this.todos
    },
  },
}
</script>
