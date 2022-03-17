<template>
    <section class="mt-6">
        <ul class="list-disc">
            <li><Link href="/" class="text-blue-500 hover:underline">Home</Link></li>
            <li><Link href="/users" class="text-blue-500 hover:underline">Users</Link></li>
            <li><Link href="/setting" class="text-blue-500 hover:underline">Setting</Link></li>
            <li><Link href="/logout" method="post" as="button" class="text-blue-500 hover:underline">Logout</Link></li>
        </ul>
    </section>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
    name: "Nav",
    components: {
        Link
    }
}
</script>

<style scoped>

</style>
