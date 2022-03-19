<template>
    <section class="bg-gray-200 p-6">
        <header class="flex justify-between">
            <div class="flex items-center">
                <p class="font-bold text-lg">MyApp</p>
                <p class="ml-2"><span class="text-green-500">Welcome</span>, {{ authUser }}</p>
            </div>
            <Nav/>
        </header>
    </section>

    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot/>
        </div>
    </section>
</template>

<script>
import Nav from "../Nav/Nav";
export default {
    name: "Layout",
    components: {
        Nav
    },
    computed: {
        authUser(){
            return this.$page.props.auth_user
        }
    }
}
</script>

<style scoped>

</style>
