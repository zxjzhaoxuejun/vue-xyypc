import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Nopage from '@/pages/404'
import TodoList from '@/components/TodoList'
import Index from '@/pages/index'
import Project from '@/pages/project'
import Server from '@/pages/server'
import News from '@/pages/news'
import Case from '@/pages/case'
import Test from '@/pages/test'
import About from '@/pages/about'
import Contact from '@/pages/contact'
import NewDetails from '@/pages/new_details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/project',
      component: Project
    },
    {
      path: '/server',
      component: Server
    },
    {
      path: '/case',
      component: Case
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/new_details/:id',
      component: NewDetails
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/todo',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/404',
      component: Nopage
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
