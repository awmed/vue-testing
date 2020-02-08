<template>
    <div>
        <div class="links">
            <router-link :to="{name: 'posts.index'}" style="margin-right: 1rem;">All Posts</router-link>
            <router-link :to="{name: 'posts.create'}">Create Post</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "PostLayout"
    }
</script>

<style scoped>

</style>
