import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostLayout from "../layouts/PostLayout";
import Index from "../views/post/Index";
import Post from "../views/post/Post";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home,
    redirect: {name: 'posts.index'},
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/posts',
    redirect: {name: 'posts.index'},
    component: PostLayout,
    children: [
      {
        path: '',
        component: Index,
        name: 'posts.index',
      },
      {
        path: 'create',
        component: Post,
        name: 'posts.create',
      }
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
