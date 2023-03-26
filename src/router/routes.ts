import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const index = () => import("@/views/index/index.vue");
const exception = () => import("@/views/exception/index.vue");
const page404 = () => import("@/views/404/index.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: index,
  },
  {
    path: "/exception",
    component: exception,
  },
  {
    path: "/:pathMatch(.*)*",
    component: page404,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
