import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gallery: { id: 1, name: "nice pic" },
    todos: [
      { id: 1, text: "adsf", done: true },
      { id: 2, text: "adsf", done: false },
      { id: 3, text: "adsf", done: true },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    gaLength: (state) => {
      return state.gallery.name.length;
    },
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
    activeTodoCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length;
    },
    getGalleryById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
});
