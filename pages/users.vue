<template>
  <div>
    <div v-if="usersRole === 'admin'">
      <v-data-table :headers="headers" :items="users">
        <template #[`item.actions`]="{ item }">
          <v-btn @click="changeRole(item)"
            >Set as {{ usersRole === 'admin' ? 'User' : 'Admin' }}</v-btn
          >
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
// import UserData from '@/components/userData.vue'
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
      return this.$store.getters.users
    },
  },

  methods: {
    changeRole(item) {
      console.log(item)
    },
  },
}
</script>
