import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		stories: [],
		loaded: false,
	},
	mutations: {
		SET_STORIES(state, data) {
			state.stories = data;
			state.loaded = true;
		},
	},
	actions: {
		setStories({ commit }, data) {
			commit('SET_STORIES', data);
		},
	},
	modules: {},
});
