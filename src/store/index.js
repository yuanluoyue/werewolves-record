import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentPlayer: 1,
        playerList: [{id:1, role:'嘟嘟噜'}]
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
                        role: '村民'
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
        }
    },
})
