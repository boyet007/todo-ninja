<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 sm6 md4 lg3 :key="person.name" v-for="person in team">
          <v-card flat color="white" class="text-xs-center pa-4 ma-3">
            <v-responsive>
              image goes here
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message-reply-text</v-icon>
                <span>Message</span>
              </v-btn>
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
        { name: 'The Net Ninja', role: 'Web Developer'},
        { name: 'Ryu', role: 'Graphic designer'},
        { name: 'Chun Li', role: 'Web Developer'},
        { name: 'Dalsim', role: 'Social media maverick'},
        { name: 'Yoshi', role: 'Sales guru'},
      ]
    }
  }
}
</script>
