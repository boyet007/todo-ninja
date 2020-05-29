<template>
    <div>
        <v-btn @click.stop="dialog=true" color="success">Add new project</v-btn>
        <v-dialog width="600px" v-model="dialog">
            <v-card>
               <v-card-title class="headline">Use Google's location service?</v-card-title>
               <v-card-text>
                    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false
        }
    }
}
</script>
