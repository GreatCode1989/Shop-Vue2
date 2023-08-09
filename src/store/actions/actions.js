export default {
  GET_SEARCH_VUEX({ commit }, value) {
    commit("SET_SEARCH_VUEX", value);
  },
  SET_MOBILE({ commit }) {
    commit("SWITCH_MOBILE");
  },
  SET_DESKTOP({ commit }) {
    commit("SWITCH_DESKTOP");
  },
  ADD_TO_CARD({ commit }, product) {
    commit("SET_CARD", product);
    console.log(product);
  },
  DELETE_FROM_CARD({ commit }, index) {
    commit("REMOVE_FROM_CARD", index);
  },
  DECREMENT_ITEM({ commit }, index) {
    commit("DECREMENT", index);
  },
  INCREMENT_ITEM({ commit }, index) {
    commit("INCREMENT", index);
  },
};
