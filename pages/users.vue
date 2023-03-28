<template>
  <div>
    <div v-if="usersRole === 'admin'">
      <v-data-table :headers="headers" :items="users">
        <template #[`item.actions`]="{ item }">
          <v-radio-group v-model="item.role" row @change="changeRole(item)">
            <v-radio id="user" label="User" value="user"></v-radio>
            <v-radio id="admin" label="Admin" value="admin"></v-radio>
          </v-radio-group>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
// import UserData from '@/components/userData.vue'
import _cloneDeep from 'lodash/cloneDeep'
export default {
  //   components: { UserData },
  middleware: ['auth'],
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
        {
          text: 'Actions',
          value: 'actions',
        },
      ],
    }
  },

  computed: {
    usersRole() {
      return this.$store.getters.role
    },
    users() {
      return _cloneDeep(this.$store.getters.users)
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
