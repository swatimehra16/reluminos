<!-- <template>
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
</script> -->

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            For more information on Vuetify, check out the
            <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation </a
            >.
          </p>
          <p>
            If you have questions, please join the official
            <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord </a
            >.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board </a
            >.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br />
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'simple',
  created() {
    this.$router.push('/todo')
  },
}
</script>
