import { createRouter, createWebHistory } from 'vue-router'

import SaveView from "@/views/SaveView";
import ELCourseView from "@/views/ELCourseView";
import UpdateView from "@/views/UpdateView";
import UserView from "@/views/body/UserView/UserView";
import DetailView from "@/views/body/UserView/DetailView";

const routes = [
  {
    path: '/',
    redirect: '/saveCourse'
  },
  {
    path: '/saveCourse',
    component: SaveView

  },
  {
    path: '/CourseView',
    component: ELCourseView
  },
  {
    path: '/UserView',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/UpdateView',
    component: UpdateView
  },
  {
    path: '/DetailView',
    name: 'DetailView',
    component: DetailView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
