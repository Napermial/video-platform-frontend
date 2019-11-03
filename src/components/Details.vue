<template>
    <div class="Details">

    </div>
</template>

<script>

    export default {
        name: 'Details',
        data() {
            return {
                list:null
            }
        },
        mounted() {
            fetch('http://localhost:8762/video',{'id':this.route.path} )
                .then(rep => this.list = rep)
        }
    }
</script>

<style scoped>

</style>