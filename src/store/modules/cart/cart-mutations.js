export default {
   SET_CART: (state, product) => {
      let isProductExists = false;
      state.cart.map(function(item) {
         if(item.article === product.article) {
            isProductExists = true;
            item.quantity++;
            item.totalPrice = item.quantity * item.price;
         }
      })
      if (!isProductExists) {
         product.quantity = 1;
         product.totalPrice = product.price;
         state.cart.push(product);
      }

      console.log(state.cart)
      localStorage.setItem('cart', JSON.stringify(state.cart))
   },
   REMOEV_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(state.cart))
   },
   INCREMENT_ITEM: (state, index) => {
      state.cart[index].quantity++;
      state.cart[index].totalPrice += state.cart[index].price;
      localStorage.setItem('cart', JSON.stringify(state.cart))
   },
   DECREMENT_ITEM: (state, index) => {
      if(state.cart[index].quantity > 1) {
         state.cart[index].quantity--;
         state.cart[index].totalPrice -= state.cart[index].price;
         localStorage.setItem('cart', JSON.stringify(state.cart))
      }
   }
}