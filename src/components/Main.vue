<template>
    <div class="main">
        <div v-if="list">
            <div v-for="elem of list" v-bind:key='elem'>
                <h2 v-on:click="getToDetails">{{elem.title}}</h2>
                <ul>{{elem.id}}</ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                list:null
            }
        },
        mounted() {
            fetch('http://localhost:8080/video/list')
                .then(resp => this.list = resp.data)
                // eslint-disable-next-line no-console
                .catch(reason => console.error(reason))
        }, methods:{
            getToDetails: function (event) {
                // eslint-disable-next-line no-console
            console.log(event)
                
            }
        }
    }
</script>

<style scoped>

</style>