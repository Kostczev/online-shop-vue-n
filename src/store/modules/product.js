import axios from "axios";

export default {
   state: {
      products: []
   },
   mutations: {
      SET_PRODUCTS_TO_STATE: (state, products) => {
         let num = 1;
         state.products = [];
         products.forEach(book => {
            book.article = 'T' + num;
            state.products.push(book);
            num++;
         });
      }
   },
   actions: {
      GET_PRODUCTS_FROM_API({commit}) {
         //return axios('http://localhost:3000/books', {
         return axios('https://my-json-server.typicode.com/Kostczev/online-shop-vue/books', {
            method: "GET"
         })
         .then((books) => {
            commit('SET_PRODUCTS_TO_STATE', books.data);
            return books;
         })
         .catch((error) => {
            console.log(error);
            return error;
         })
      }
   },
   getters: {
      PRODUCTS(state) {
         return state.products;
      }
   }
}