import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentPlayer: 0,
    },
    mutations: {
        changeNumberOfPlayer(state, numOfPlayer) {
            state.currentPlayer = numOfPlayer
        }
    },
})
