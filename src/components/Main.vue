<template>
    <div class="main">
        <h1>BEST FREE VIDEOS click below</h1>
<!--        <div v-if="this-list!=null" >-->
            <div v-for="elem in list" v-bind:key='elem.id'>
                <h2 :id="elem.id" v-on:click="getToDetails">{{elem.name}}</h2>
                <h3 >{{elem.id}}</h3>
            </div>
<!--        </div>-->
    </div>
</template>

<script>

    export default {
        name: "Main",
        data: function () {
            return {
                list: []
            }
        },
        beforeMount() {
            fetch('http://localhost:8762/video/list')
                .then(res => res.json())
                .then(res => this.$data.list = res)
                .finally(r => {
                    r;
                    // eslint-disable-next-line no-console
                console.log(this.$data);
                })
                // eslint-disable-next-line no-console
                .catch(reason => console.error(reason))
        }, methods:{
            getToDetails: function (event) {
                // eslint-disable-next-line no-console
            console.log(event.target.id)
                this.$router.push(event.target.id)

                
            }
        }
    }
</script>

<style scoped>

</style>