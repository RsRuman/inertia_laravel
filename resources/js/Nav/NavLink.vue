<template>
    <Link class="text-blue-500 hover:underline" :class="{'font-bold underline': active}">
        <slot/>
    </Link>

</template>

<script>

export default {
    name: "NavLink",
    props: {
        active: Boolean
    }
}
</script>

<style scoped>

</style>
