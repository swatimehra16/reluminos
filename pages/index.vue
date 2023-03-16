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
  data() {
    return {
      email: '',
      pwd: '',
    }
  },
  methods: {
    submitForm() {
      if (
        (this.email === 'test1@test.com' && this.pwd === 'test1') ||
        (this.email === 'test2@test.com' && this.pwd === 'test2')
      ) {
        // alert('login successfully')
        this.$store.dispatch('loggedInUser', this.email)
        this.$router.push('/todo')
      } else {
        alert('incorrect user details, kindly check email and password!')
      }
    },
  },
}
</script>
