import cartMutations from "./cart-mutations";
import cartActions from "./cart-actions";
import cartGetters from "./cart-getters";

export default {
   state: {
      cart: JSON.parse(localStorage.getItem('cart') || '[]'),
   },
   mutations: cartMutations,
   actions: cartActions,
   getters: cartGetters 
}