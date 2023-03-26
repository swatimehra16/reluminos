<template>
  <v-data-table :headers="headers" :items="users">
    <template #[`item.actions`]="{ item }">
      <v-btn @click="changeRole(item)">Set as</v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  name: 'UserData',
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
          value: 'action',
        },
      ],
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    },
  },
}
</script>
