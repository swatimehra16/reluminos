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
  },
  loggedInUser(state, email) {
    state.loggedInUser = email
  },
}
