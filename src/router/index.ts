import { createRouter, createWebHistory } from "vue-router";

export const constantRoutes = [
  {
    path: "/",
    name: "IndexView",
    component:()=>import("@/views/portal/IndexView.vue")
  },
  {
    path: "/404",
    name: "Page404",
    component: () => import("@/views/exception/404.vue"),
    meta: {
      title: "404",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;
