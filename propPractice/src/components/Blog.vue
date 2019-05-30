<template>
    <div>
        <div>
            <h1>
                {{ title }}
            </h1>
            <p> {{ author }} </p>
            <p> {{ post }} </p>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {

            }
        },
        props: {
            title: String,
            author: String,
            post: String
        }
    }
</script>

<style>

</style>
