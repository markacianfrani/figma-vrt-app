import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";
import "./index.css";
import store from "./store";
import router from "./routes";

const app = createApp(App);
app.use(store).use(router);

app.use(
  VueGtag,
  {
    pageTrackerExcludedRoutes: ["callback"],
    config: { id: "G-82THN7JJ97" },
  },
  router
);
app.mount("#app");
