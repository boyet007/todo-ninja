<template>
    <nav>
        <v-navigation-drawer dark class="primary" v-model="drawer" app>
          <v-flex class="mt-5 text-center">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="">
          </v-avatar>
          <p class="white--text subheading mt-1">
            The Net Ninja
          </p>
        </v-flex>


            <v-list dense>
                <v-list-item router :to="link.route" v-for="(link, index) in links" :key="index">
                <v-list-item-action >
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
        </v-list>
        </v-navigation-drawer>

        <v-app-bar app flat>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Todo Ninja</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
               <v-icon>mdi-logout-variant</v-icon>
            </v-btn>
        </v-app-bar>
  </nav>
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: true,
      links: [
          { icon: 'mdi-view-dashboard', text: 'Dashboard', route:'/' },
          { icon: 'mdi-folder', text: 'My Projects', route:'/projects' },
          { icon: 'mdi-account', text: 'Team', route:'/teams' },
      ]
    }),
  }
</script>