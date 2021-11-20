import { createStore, MutationTree } from "vuex";
import user from "./user";
// Create a new store instance.
const store = createStore({
  modules: {
    user,
  },
});

export default store;
