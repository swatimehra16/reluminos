<template>
  <div>
    <v-data-table :headers="headers" :items="users">
      <template #[`item.role`]="{ item }">
        <v-radio-group v-model="item.role" row @change="changeRole(item)">
          <v-radio id="user" label="User" value="user"></v-radio>
          <v-radio id="admin" label="Admin" value="admin"></v-radio>
        </v-radio-group>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  //   components: { UserData },
  middleware: ['auth', 'role'],
  data() {
    return {
      headers: [
        {
          text: 'Name',
          value: 'name',
        },
        {
          text: 'Email',
          value: 'email',
        },
        {
          text: 'Role',
          value: 'role',
        },
      ],
    }
  },

  computed: {
    usersRole() {
      return this.$store.getters.role
    },
    users() {
      const users = this.$store.getters.users.filter((item) => {
        return item.email !== this.$store.getters.loggedInUser
      })
      return users
    },
  },

  methods: {
    changeRole(item) {
      console.log('Role', item.role)
      // const newRole = this.users.findIndex((item) => {
      //   return item.role === this.role
      // })
      // if(item.role === 'admin')  item.role = 'user'
      // else item.role ='admin'
      this.$store.dispatch('changeRole', item)
    },
  },
}
</script>
