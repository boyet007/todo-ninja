<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" v-on="on" @click="sortBy('title')">
              <v-icon left small>mdi-folder</v-icon><span class="text-lowercase">By project name</span>
            </v-btn> 
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" v-on="on" @click="sortBy('person')">
              <v-icon left small>mdi-account</v-icon><span class="text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort project by person name</span>
        </v-tooltip>
      </v-layout>
      <v-card v-for="(project, index) in projects" flat :key="index" class="mb-4">
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
            <div>
              <v-chip small :class="`${project.status} my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider />
      
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb';
export default {
  name: 'Home',
  data() {
    return {
      projects: []
    }
  }, 
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
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

<style>
  .project.complete { border-left: 4px solid #3cd1c2; }
  .project.ongoing { border-left: 4px solid orange; }
  .project.overcome { border-left: 4px solid tomato; }
  
  .v-chip.complete { background: #3cd1c2 !important; }
  .v-chip.ongoing { background: orange !important; }
  .v-chip.overcome { background: tomato !important; }
</style>
