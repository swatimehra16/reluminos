<template>
  <v-app dark>
    <!-- <TheHeader /> -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!--<v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
       <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> 
      <v-toolbar-title>{{ title }}</v-toolbar-title>-->
      <v-spacer />
      <h3>{{ userName }}</h3>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <!--<v-list>
         <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item> 
      </v-list>-->
      <v-list>
        <v-list-item> {{ userName }} </v-list-item>
        <v-list-item>
          <v-btn color="primary" @click="logout">Logout</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
// import TheHeader from '@/components/TheHeader.vue'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        // {
        //   icon: 'mdi-home',
        //   title: 'Home',
        //   to: '/',
        // },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/welcome',
        },
        {
          icon: 'mdi-list-box',
          title: 'Task',
          to: '/todo',
        },
        {
          icon: 'mdi-apps',
          title: 'Kendo',
          to: '/kendo',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  computed: {
    userName() {
      return this.$store.getters.loggedInUser
    },
    // userRole() {
    //   return this.$store.getters.role
    // },
  },
  mounted() {
    // if (this.userRole === 'admin') {
    //   this.items.push({ icon: 'mdi-list-box', title: 'Task', to: '/todo' })
    // }
  },
  methods: {
    logout() {
      this.$store.dispatch('loggedInUser', '')
      this.$router.push('/login')
    },
  },
}
</script>
