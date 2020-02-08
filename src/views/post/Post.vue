<template>
    <div>
        <form name="post-form" @submit.prevent="addPost">
            <div class="form-control">
                <input type="text"
                       name="title"
                       v-model="post.title">
            </div>

            <div class="form-control">
                <textarea name="body"
                      cols="30"
                      rows="10"
                      v-model="post.body"></textarea>
            </div>
            <input type="submit" value="Submit">
        </form>

        <h2 v-if="success">{{feedbackMessage}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Post",
        data() {
            return {
                post: {
                    title: '',
                    body: '',
                    userId: 1,
                },
                feedbackMessage: '',
                success: false,
            }
        },
        methods: {
            async addPost() {
                const config = {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                };

                const response = await this.$http.post('https://jsonplaceholder.typicode.com/posts', this.post, config);
                this.feedbackMessage = 'message' in response.data ? response.data.message : 'Default message';
                this.success = true;
            }
        },
    }
</script>

<style scoped>
    .form-control {
        display: block;
        margin-bottom: 1rem;
    }
</style>
