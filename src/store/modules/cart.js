import UserAPI from '@/api/User'
import ProductAPI from '@/api/Product'
import {store} from '@/store'

export default {
    namespaced: true,
    state: {
        carts:[]
    },
    actions: {
        async getCartsByUserId({ commit }, userId){
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
        },

        async updateCarts({commit}, carts){

            const payload = {
                carts: carts
            }

            let userId = store.state.user.user_id
            const res = await ProductAPI.updateProductInCart(userId, payload)

            if(res.data){
                console.log('remove product from cart success', res.data)
                commit('updateCarts', res.data.carts)
            }else{
                console.log("Fail to get user by id")
            }
        },
        
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