import Vue from 'vue'
import VueRouter from 'vue-router'
import home_page from '../views/home_page.vue'
import fiction_ratings from '../views/fiction_ratings.vue'
import new_rating from '../views/new_rating.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home_page',
    component: home_page
  },
  {
    path: '/fiction_ratings',
    name: 'fiction_ratings',
    component: fiction_ratings
  },
  {
    path: '/new_rating',
    name: 'new_rating',
    component: new_rating
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
