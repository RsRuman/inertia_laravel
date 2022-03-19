<template>
    <section>
        <ul class="flex list-disc space-x-4 list-inside">
            <li>
                <NavLink href="/" :active="$page.component === 'Home'">Home</NavLink>
            </li>
            <li>
                <NavLink href="/users" :active="$page.component === 'User'">Users</NavLink>
            </li>
            <li>
                <NavLink href="/setting" :active="$page.component === 'Setting'">Setting</NavLink>
            </li>

            <li><Link href="/logout" method="post" as="button" class="text-blue-500 hover:underline">Logout</Link></li>
        </ul>
    </section>
</template>

<script>
import NavLink from "./NavLink";

export default {
    name: "Nav",
    components: {
        NavLink
    }
}
</script>

<style scoped>

</style>
