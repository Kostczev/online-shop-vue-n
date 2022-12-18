export default {
   ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
   },
   DELETE_FROM_CART({commit}, index) {
      commit('REMOEV_FROM_CART', index)
   },
   DECREMENT_CART_ITEM({commit}, index) {
      commit('DECREMENT_ITEM', index)
   },
   INCREMENT_CART_ITEM({commit}, index) {
      commit('INCREMENT_ITEM', index)
   }
}