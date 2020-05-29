<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 sm6 md4 lg3 :key="person.name" v-for="person in team">
          <v-card color="white" class="text-center pa-4 ma-3">
            <v-responsive>
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-flex>
              <v-btn text color="grey">
                <v-icon small left>mdi-message-reply-text</v-icon>
                <span>Message</span>
              </v-btn>
              </v-flex>

            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web Developer', avatar: '/avatar-1.png'},
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png'},
        { name: 'Chun Li', role: 'Web Developer', avatar: '/avatar-3.png'},
        { name: 'Dalsim', role: 'Social media maverick', avatar: '/avatar-4.png'},
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'},
      ]
    }
  }
}
</script>
