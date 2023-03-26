<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card style="max-width: 500px" class="mx-auto">
          <v-form class="pa-4 pt-6">
            <v-text-field
              v-model="name"
              label="Enter name"
              type="text"
              style="min-height: 96px"
            ></v-text-field>
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
            <v-btn @click="signUp">Register</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  auth: false,
  layout: 'simple',

  data() {
    return {
      email: '',
      pwd: '',
      name: '',
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    },
  },

  methods: {
    signUp() {
      const userSignUp = this.users.find((el) => {
        return el.email === this.email
      })
      if (!userSignUp) {
        this.$store.dispatch('signUp', {
          name: this.name,
          email: this.email,
          pwd: this.pwd,
          role: 'user',
        })
        alert('Registered successfully, please login!')
        this.$router.push('/login')
      } else {
        alert('Email already exists')
      }
    },
  },
}
</script>
