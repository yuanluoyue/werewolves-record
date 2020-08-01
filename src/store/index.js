import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentPlayer: 0,
        playerList: []
    },
    mutations: {
        changeNumberOfPlayer(state, numOfPlayer) {
            const li = state.playerList
            state.currentPlayer = numOfPlayer

            if (li.length < numOfPlayer) {
                while (li.length < numOfPlayer) {
                    const id = li.length + 1
                    const playerItem = {
                        id: id,
                        role: '村民',
                        alive: true,
                    }
                    li.push(playerItem)
                }
            } else if (li.length > numOfPlayer) {
                while (li.length > numOfPlayer) {
                    li.pop()
                }
            }
        },

        changePlayerRole(state, parm) {
            state.playerList[parm.index].role = parm.role
        },

        changePlayerAlive(state, parm) {
            state.playerList[parm.index].alive = parm.role
        },

        resetPlayerData(state) {
            state.playerList.forEach(el => {
                el.alive = true
                el.role = '村民'
            })
        }
    },
})
