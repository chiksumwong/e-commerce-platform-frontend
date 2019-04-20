export default {
    namespaced: true,
    state: {
        payment:[],
        total:0
    },
    actions: {
        clearPayment({commit}){
            commit('clearPayment')
        },

        updatePayment({commit}, payment){
            commit('updatePayment', payment)
           
        },
        updateTotal({commit}, total){
            commit('updateTotal', total)
        },
    },
    mutations: {
        updatePayment(state, payment){
            state.payment = payment
        },
        updateTotal(state, total){
            state.total = total
        },
        clearPayment(state){
            state.payment = [],
            state.total = 0
        }
    }
}