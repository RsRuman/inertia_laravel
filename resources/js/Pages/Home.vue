<template>
    <h1 class="text-4xl font-bold">Welcome, {{ name }}</h1>
    <Nav></Nav>

</template>

<script>
import Nav from "../Nav/Nav";
export default {
    name: "Home",
    props: {
        name: String
    },
    components: {
        Nav
    }
}
</script>

<style scoped>

</style>
