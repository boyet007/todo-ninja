<template>
  <div class="team">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5 px-4">
       <v-expansion-panels accordion hover>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">   
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="font-weight-bold">due by {{ project.due }}</div>
           <span>{{ project.content }}</span>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
       projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { title: 'Learning Vuetify', person: 'The Net Ninja', due: '1st Jan 2020', status: 'ongoing', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { title: 'Code up homepage', person: 'Chun li', due: '10th Jan 2019', status: 'complete', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { title: 'Create a community forum', person: 'Dalsim', due: '20th Oct 2018', status: 'overcome', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => project.person === 'The Net Ninja');
    }
  }

}
</script>
