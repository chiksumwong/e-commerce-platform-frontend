import UserAPI from '@/api/User'

export default {
    namespaced: true,
    state: {
        carts:[]
    },
    actions: {
        async updateCarts({ commit }, userId){
            if(userId){
                const res = await UserAPI.getUserById(userId);
                if(res.data){
                    console.log('get user by id success', res.data)
                    commit('updateCarts', res.data.carts)
                }else{
                    console.log("Fail to get user by id")
                }
            }else{
                console.log("Fail to get carts, since user is not login.")
            }
        },

        clearCarts({commit}){
            commit('clearCarts')
        }
        
    },
    mutations: {
        updateCarts(state, carts){
            state.carts = carts
        },
        clearCarts(state){
            state.carts = []
        }
    }
}