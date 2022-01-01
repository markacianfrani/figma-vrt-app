import { createStore, MutationTree, GetterTree, } from "vuex";
import { UserState } from "../types";



const state = (): UserState => {
  return {
    token: "",
    fileId: "",
    userName: "",
    userEmail: "",
    userImage: ""
  };
};
const mutations = {
  addToken(state: UserState, payload: string) {
    state.token = payload;
  },
  addFileId(state: UserState, payload: string) {
    state.fileId = payload;
  },
  addUserName(state: UserState, payload: string) {
    state.userName = payload;
  },
  addUserEmail(state: UserState, payload: string) {
    state.userEmail = payload;
  },
  addUserImage(state: UserState, payload: string) {
    state.userImage = payload;
  },
};

export type Getters = {
  hasToken(state: UserState): boolean
  hasFileId(state: UserState): boolean
}

export const getters: GetterTree<UserState, UserState> & Getters = {
  hasToken: (state: UserState) => {
    return !!state.token
  },
  hasFileId: (state: UserState) => {
    return !!state.fileId
  }
}

export default {
	namespaced: true,
  state,
  mutations,
  getters
};
