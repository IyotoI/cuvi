const getDefaultState = () => ({
  dataUser: null,
  personalData: {},
});

export const state = () => ({
  ...getDefaultState(),
});

export const mutations = {
  updateKey(state, payload) {
    state[payload.object][payload.key] = payload.value;
  },

  updateValue(state, payload) {
    state[payload.key] = payload.value;
  },

  resetState(state) {
    Object.assign(state, getDefaultState());
  },
};

export const actions = {
  actUpdateKey({ commit }, payload) {
    commit("updateKey", payload);
  },

  actUpdateValue({ commit }, payload) {
    commit("updateValue", payload);
  },

  actResetState({ commit }) {
    commit("resetState");
  },
};

export const getters = {
  dataUser({ dataUser }) {
    return dataUser;
  },
  personalData({ personalData }) {
    return personalData;
  },
};
