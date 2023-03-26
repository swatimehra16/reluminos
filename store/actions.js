export default {
  addTodo(context, payload) {
    context.commit('addTodo', payload)
  },

  removeTodo(context, payload) {
    context.commit('removeTodo', payload)
  },

  toggleTodo(context, payload) {
    context.commit('toggleTodo', payload)
  },
  loggedInUser(context, payload) {
    context.commit('loggedInUser', payload)
  },
  editTask(context, payload) {
    context.commit('editTask', payload)
  },
  signUp(context, payload) {
    context.commit('signUp', payload)
  },
  role(context, payload) {
    context.commit('role', payload)
  },
}
