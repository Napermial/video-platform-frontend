<template>
    <div class="Details">
        <h1 v-on:click="goHome">best videos - no mum said I can have my own page</h1>
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
        <div>
            <div>
                <select v-model="rated">
                    <option >Rating</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div>
                <input v-model="recommendation" placeholder="comment">
            </div>
            <button :id="elem.id" v-on:click="addComment">ADD recommendation</button>
            <div>

            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Details',
        data() {
            return {
                elem:null,
                rated:0,
                recommendation: '',
                comments:null
            }
        },
        beforeMount() {
            fetch('http://localhost:8762/video?id=' + this.$router.currentRoute.path.replace('/',''))
                .then(rep => rep.json())
                .then(rep => this.$data.elem = rep)
        },
        methods:{
            addComment:function (event) {
                const resp = {'videoId':event.target.id,
                    'rating': this.rated,
                    'comment': this.recommendation}

                axios.post('http://localhost:8762/video',resp, {method:'POST'})
            },goHome:function () {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>