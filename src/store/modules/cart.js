import UserAPI from '@/api/User'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
    ? { user_id:user.user_id, carts:[] }
    : { user_id: null, carts:[] };

export default {
    namespaced: true,
    state: initialState,
    actions: {
        async updateCarts({ commit }, userId){
            if(userId){
                const res = await UserAPI.getUserById(userId);
                if(res.data){
                    console.log('get user by id success', res.data)
                    commit('updateCarts', res.data.cart)
                }else{
                    console.log("Fail to get user by id")
                }
            }else{
                console.log("Fail to get carts, since user is not login.")
            }
        },
        
    },
    mutations: {
        updateCarts(state, carts){
            state.carts = carts
        }
    }
}