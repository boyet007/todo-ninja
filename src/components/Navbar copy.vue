<template>
    <nav>
        <v-navigation-drawer app v-model="drawer">
            test
        </v-navigation-drawer>
        <v-app-bar dense flat dark color="success darken-2">
            <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Todo Ninja</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon><v-icon>mdi-logout-variant</v-icon></v-btn>
        </v-app-bar>
    </nav>
    
</template>

<script>
export default {
    component: {  },
    data: () => ({
        drawer: false,
    }),
}
</script>
