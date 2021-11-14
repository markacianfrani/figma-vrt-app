import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/PageSnapshot.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/PageSettings.vue"),
  },
  {
    path: "/error",
    name: "Error",
    component: () => import("../views/PageError.vue"),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
