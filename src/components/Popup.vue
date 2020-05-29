<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-btn color="success" dark v-on="on">
                    Add a new project
                </v-btn>
            </template>
            <v-card>
                <v-card-title><h2>Add a New Project</h2></v-card-title>
                <v-card-text>
                   <v-form class="px-3">
                       <v-text-field label="Title" prepend-icon="folder" v-model="title"></v-text-field>
                        <v-textarea label="Information" prepend-icon="edit" v-model="content"></v-textarea>
                       <v-menu  min-width="0">
                            <template v-slot:activator="{ on }">
                            <v-text-field :value="formattedDate" v-on="on" label="Due date" prepend-icon="date_range"></v-text-field>
                            </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-menu>
                        <v-btn text class="success mx-0 mt-3" @click="submit">Add project</v-btn>
                   </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { parseISO, format } from 'date-fns';
export default {
    data() {
        return {
            dialog: false,
            title: '',
            content: '',
            due: ''
        }
    },
    methods: {
        submit() {
            console.log(this.title, this.content)
        }
    },
    computed: {
        formattedDate() {
            return this.due ? format(parseISO(this.due), 'do MMM yyyy') : '';
        }
    }
}
</script>
