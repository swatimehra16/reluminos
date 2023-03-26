export default {
  addTodo(state, task) {
    state.todos.push(task)
  },
  removeTodo(state, item) {
    const newIndex = state.todos.findIndex((el) => {
      return el.id === item.id
    })
    state.todos.splice(newIndex, 1)
  },

  toggleTodo(state, item) {
    const newIndex = state.todos.findIndex((el) => {
      return el.id === item.id
    })
    if (item.status === 'done') item.status = 'undone'
    else item.status = 'done'
    // state.todos.splice(newIndex, 1, item)
    state.todos[newIndex].status = item.status
    console.log(
      'Inside Mutation state.todos[newIndex] ToggleToDo ' +
        state.todos[newIndex]
    )
  },
  loggedInUser(state, email) {
    state.loggedInUser = email
  },
  role(state, role) {
    state.role = role
  },
  editTask(state, data) {
    const index = state.todos.findIndex((el) => {
      return el.id === data.id
    })
    // console.log('Inside Mutation ' + data)
    console.log('Task Value ' + data.task)
    // data = Object.assign({}, state.todos[index])
    if (index > -1) {
      state.todos[index].task = data.task
      console.log('Task Value after ' + data.task)
    }
    // alert('ID found!' + index)
  },
  signUp(state, details) {
    state.users.push(details)
  },
}
