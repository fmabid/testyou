import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        nameList: [],
    },
    mutations: {
        addNameToList: (state, payload) => {
            state.nameList.push(payload)
        }
    },
    actions: {
        addNameToListAction: (context, payload) => {
            context.commit('addNameToList', payload)
        }
    },
    getters: {
        getNameListGetter: state => {
            return state.nameList
        }
    }
})