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
          <v-radio id="all" label="All" value="null"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <v-data-table :headers="headers" :items="tableData" :search="search">
      <template #[`item.status`]="{ item }">
        <v-btn small @click="toggleTodo(item)">
          {{ item.status }}
        </v-btn>
      </template>
      <template #[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editTask(item)"> mdi-pencil </v-icon>
        <v-icon small @click="removeTodo(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="dialogEdit" max-width="500px">
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-text-field v-model="editedItem.task"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn @click="saveEditedTask()">Save</v-btn>
          <v-btn @click="dialogEdit = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  name: 'TaskPage',
  middleware: ['auth', 'role'],
  // middleware: ['auth'],
  data() {
    return {
      // todos: [
      //   { task: 'Test Task 1', status: 'done' },
      //   { task: 'Test Task 2', status: 'undone' },
      //   { task: 'Test Task 3', status: 'undone' },
      //   { task: 'New Task 1', status: 'done' },
      //   { task: 'New Task 2', status: 'undone' },
      // ],
      dialogEdit: false,
      tableData: [],
      editedItem: {},
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
    // console.log(this.tableData)
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
      // console.log(item)
      this.$store.dispatch('toggleTodo', item)
    },
    filterStatus() {
      if (this.filterBy === 'null') {
        this.tableData = this.todos
        console.log('@@@@@@@@@', this.filterBy)
      } else {
        const newTodo = this.todos.filter((item) => {
          return item.status === this.filterBy
        })
        this.tableData = newTodo
        console.log(this.tableData)
      }
    },
    // clearFilter() {
    //   this.filterBy = null
    //   this.tableData = this.todos
    // },
    editTask(item) {
      // this.editTodo = item.task
      this.editedItem = Object.assign({}, item)

      console.log(item.task)
      // console.log(this.editTodo)
      // this.editTodo = ''
      this.dialogEdit = true
    },
    saveEditedTask() {
      // this.editedItem.task = this.editTodo
      console.log('Edited Task', this.editedItem)
      this.$store.dispatch('editTask', this.editedItem)
      this.dialogEdit = false
    },
  },
}
</script>
