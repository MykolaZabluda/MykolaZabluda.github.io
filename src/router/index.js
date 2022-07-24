import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from "@/views/LoginView";
import TodoView from "@/views/TodoView";
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoView
  },
]

const router = new VueRouter({
  routes
})

export default router
