<template>
    <div>
        <div v-for="post in posts" class="post">
            <div class="mb-1">ID - {{post.id}}</div>
            <div class="mb-1">Title - {{post.title}}</div>
            <div class="mb-1">Body - {{post.body}}</div>
            <div class="mb-1">UserId - {{post.userId}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                posts: [],
            }
        },
        mounted() {
            this.fetchPosts()
        },
        methods: {
            async fetchPosts() {
                let response = await this.$http.get('https://jsonplaceholder.typicode.com/posts');

                this.posts = response.data;
            },
        },
    }
</script>

<style scoped>
    .post {
        width: 200px;
        margin: 0 auto 1rem auto;
        background: #aaa;
        color: #fff;
        padding: 1rem;
    }
</style>
