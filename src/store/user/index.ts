import { createStore, MutationTree } from "vuex";
import { UserState } from "../types";



const state = (): UserState => {
  return {
    token: "",
    fileId: "",
  };
};
const mutations = {
  addToken(state: UserState, payload: string) {
    state.token = payload;
  },
  addFileId(state: UserState, payload: string) {
    state.fileId = payload;
  },
};

export default {
	namespaced: true,
  state,
  mutations,
};
