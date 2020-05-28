<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-card flat v-for="(project, index) in projects" :key="index">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>{{ project.status }}</div>
          </v-flex>
        </v-layout>
        <v-divider />
      
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { title: 'Code up homepage', person: 'Chun li', due: '10th Jan 2019', status: 'complete', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { title: 'Create a community forum', person: 'Dalsim', due: '20th Oct 2018', status: 'overcome', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
      ]
    }
  }
}
</script>

<style>
  .project.complete { border-left: 4px solid #3cd1c2; }
  .project.ongoing { border-left: 4px solid orange; }
  .project.overcome { border-left: 4px solid tomato; }
</style>
