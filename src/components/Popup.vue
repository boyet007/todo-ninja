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
                   <v-form class="px-3" ref="form">
                       <v-text-field label="Title" prepend-icon="folder" :rules="inputRules" v-model="title"></v-text-field>
                        <v-textarea label="Information" prepend-icon="edit" :rules="inputRules" v-model="content"></v-textarea>
                       <v-menu  min-width="0">
                            <template v-slot:activator="{ on }">
                            <v-text-field :value="formattedDate" v-on="on" label="Due date" :rules="inputRules" prepend-icon="date_range"></v-text-field>
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
import db from '@/fb.js';
export default {
    data() {
        return {
            dialog: false,
            title: '',
            content: '',
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ]
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(parseISO(this.due), 'do MMM yyyy'),
                    person: 'The Net Ninja',
                    status: 'ongoing'
                };
                db.collection('projects').add(project).then(() => {
                    console.log('added to db');
                });
            }
            
        }
    },
    computed: {
        formattedDate() {
            return this.due ? format(parseISO(this.due), 'do MMM yyyy') : '';
        }
    }
}
</script>
