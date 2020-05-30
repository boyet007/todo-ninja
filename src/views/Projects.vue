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
import db from '@/fb';
export default {
  data() {
    return {
       projects: []
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => project.person === 'The Net Ninja');
    }
  },
    created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  },

}
</script>
