import {
  createWebHashHistory,
  createWebHistory,
  createRouter,
} from "vue-router";
import store from "../store";
function removeQueryParams(to: any, next: any) {
  console.log("todo", to.query['profile[email]']);

  if (to.query.access_token) {
    store.commit("user/addToken", to.query.access_token);
    store.commit("user/addUserEmail", to.query['profile[email]']);
    store.commit("user/addUserName", to.query['profile[handle]']);
    store.commit("user/addUserImage", to.query['profile[img_url]']);
    return '/app/settings'
  }

  if (Object.keys(to.query).length)
    return { path: to.path, query: {}, hash: to.hash };
}

const routes = [
  {
    path: "/",
    component: () => import("../views/PageLanding.vue"),
  },
  {
    path: "/app",
    component: () => import("../views/PageAdminShell.vue"),
    children: [
      {
        path: "/app/",
        name: "Home",
        component: () => import("../views/PageDashboard.vue"),
      },
      {
        path: "/app/settings",
        name: "Settings",
        component: () => import("../views/PageSettings.vue"),
      },
      {
        path: "/app/error",
        name: "Error",
        component: () => import("../views/PageError.vue"),
      },
      {
        path: "/app/generic",
        name: "Generic",
        component: () => import("../views/PageGeneric.vue"),
      }
    ],
    beforeEnter: (to: any, from: any, next: any) => {
      console.log('hastoken',store.getters['user/hasToken']);
      
      if (store.getters['user/hasToken']) {
        next()
      } else {
        console.log('no token');
        next()
        
      }
      console.log('store', store.getters);
      
      
      // ...
    }
  },

  {
    path: "/callback",
    name: "callback",
    component: () => import("../views/PageAuthCallback.vue"),
    props: true,
    // props: (route: any) => {
    //   const params = Object.assign({}, route.query)
    //   console.log('params', params);
    //   route.query = {}
    //   return {
    //     params: params
    //   }
    // },
    beforeEnter: [removeQueryParams],
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
