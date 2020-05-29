<template>
    <div>
        <v-btn @click.stop="dialog=true" color="success">Add new project</v-btn>
        <v-dialog width="600px" v-model="dialog">
            <v-card>
               <v-card-title><h2>Add a New Project</h2></v-card-title>
               <v-card-text>
                   <v-form class="px-3">
                       <v-text-field label="Title" prepend-icon="folder" v-model="title"></v-text-field>
                        <v-textarea label="Information" prepend-icon="edit" v-model="content"></v-textarea>
                        <v-btn text class="success mx-0 mt-3" @click="submit">Add project</v-btn>
                   </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            title: '',
            content: ''
        }
    },
    methods: {
        submit() {
            console.log(this.title, this.content)
        }
    }
}
</script>
