<template>
    <div id="app">
        this is outer component <br>
        <inner/>
    </div>
</template>

<script>
    import inner from './inner'

    export default {
        components: {
            inner
        }
    }
</script>

<style>
    #app {
        color:red;
    }
</style>
