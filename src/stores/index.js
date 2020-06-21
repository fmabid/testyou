import Vue from 'vue';
import Vuex from 'vuex';

import nameListModule from "../stores/modules/nameList/nameListModule";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        nameListModule,
        strict: true,
    }
})