<template>
  <div>
    <h1>Welcome</h1>
    <!-- <div v-if="usersRole === 'admin'"><UserData /></div> -->
  </div>
</template>
<script>
// import UserData from '@/components/userData.vue'

export default {
  // components: { UserData },
  middleware: ['auth'],
  computed: {
    usersRole() {
      return this.$store.getters.role
    },
  },
}
</script>
