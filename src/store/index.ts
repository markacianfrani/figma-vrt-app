import { createStore, MutationTree } from "vuex";
interface UserState {
  token: string;
  fileId: string;
}
// Create a new store instance.
export const store = createStore({
  state(): UserState {
    return {
      token: "",
      fileId: "",
    };
  },
  mutations: {
    addToken(state: UserState, payload: string) {
      state.token = payload;
    },
    addFileId(state: UserState, payload: string) {
      state.fileId = payload;
    }
  },
});
