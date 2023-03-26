<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card style="max-width: 500px" class="mx-auto">
          <v-form class="pa-4 pt-6">
            <v-text-field
              v-model="email"
              label="Enter email"
              type="email"
              style="min-height: 96px"
            ></v-text-field>
            <v-text-field
              v-model="pwd"
              label="Password"
              style="min-height: 96px"
              type="password"
            ></v-text-field>
            <v-btn @click="submitForm">Login</v-btn>
            <v-btn @click="$router.push('/signup')">Sign Up</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'simple',
  auth: false,
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

        this.$store.dispatch('loggedInUser', userLogin.email)
        console.log(userLogin.role)

        this.$store.dispatch('role', userLogin.role)

        this.$router.push('/')
      } else {
        alert('incorrect user details, kindly check email and password!')
      }
    },
  },
}
</script>
<style scoped>
v-form {
  margin: 0 auto;
}
</style>
