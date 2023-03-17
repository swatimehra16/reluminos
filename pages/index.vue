<template>
  <v-container>
    <v-row>
      <v-col>
        <form>
          <v-text-field v-model="email" label="Enter email"></v-text-field>
          <v-text-field
            v-model="pwd"
            label="Enter password"
            type="password"
          ></v-text-field>
          <v-btn @click="submitForm">Login</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  //   middleware: 'log',
  layout: 'login',
  data() {
    return {
      email: '',
      pwd: '',
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    },
  },

  methods: {
    submitForm() {
      const userLogin = this.users.find((el) => {
        return el.email === this.email && el.pwd === this.pwd
      })
      if (
        // (this.email === 'test1@test.com' && this.pwd === 'test1') ||
        // (this.email === 'test2@test.com' && this.pwd === 'test2')
        userLogin
      ) {
        // alert('login successfully')
        // console.log(userLogin)
        this.$store.dispatch('loggedInUser', this.email)
        this.$router.push('/todo')
      } else {
        alert('incorrect user details, kindly check email and password!')
      }
    },
  },
}
</script>
