const state = {
    nameList: [],
}

const mutations = {
    addNameToList: (state, payload) => {
        state.nameList.push(payload)
    }
}

const actions = {
    addNameToListAction: (context, payload) => {
        context.commit('addNameToList', payload)
    }
}

const getters = {
    getNameListGetter: state => {
        return state.nameList
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}