<template>
    <div class="Details">
        <h1>best videos - no mum said I can have my own page</h1>
        <div>
            <h2 style="float: left">{{elem.id}}</h2>
            <h2 style="float: right">{{elem.name}}</h2>
            <iframe width="1280"
                    height="725"
                    :src="elem.url"
                    allow="accelerometer;
                    encrypted-media;
                    gyroscope;
                    picture-in-picture"
                    allowfullscreen>
            </iframe>
        </div>
        <h3 v-for="comment in elem.recommendation" v-bind:key="comment.id"></h3>

    </div>
</template>

<script>

    export default {
        name: 'Details',
        data() {
            return {
                elem:null
            }
        },
        beforeMount() {
            fetch('http://localhost:8762/video?id=' + this.$router.currentRoute.path.replace('/',''))
                .then(rep => rep.json())
                .then(rep => this.$data.elem = rep)
                // eslint-disable-next-line no-console
                .then(rep => console.log(rep))
        }
    }
</script>

<style scoped>

</style>