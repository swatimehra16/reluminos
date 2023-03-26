export default () => ({
  users: [
    { name: 'user1', email: 'test1@test.com', pwd: 'test1', role: 'user' },
    { name: 'user2', email: 'test2@test.com', pwd: 'test2', role: 'admin' },
  ],
  todos: [
    // { task: 'Test Task 1', status: 'done', user: 'test1@test.com', id: 1 },
    // { task: 'Test Task 2', status: 'undone', user: 'test2@test.com', id: 2 },
    // { task: 'Test Task 3', status: 'undone', user: 'test2@test.com', id: 3 },
    // { task: 'New Task 1', status: 'done', user: 'test1@test.com', id: 4 },
    // { task: 'New Task 2', status: 'undone', user: 'test1@test.com', id: 5 },
  ],
  loggedInUser: '',
  role: '',
})
