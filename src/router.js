import { createRouter, createWebHistory } from 'vue-router';
import vCatalog from '@/components/catalog/v-catalog.vue';
import vCart from '@/components/cart/v-cart.vue';

export default createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         redirect: { name: 'catalog' }
      },
      { 
         path: '/online-shop-vue/', 
         component: vCatalog, 
         name: 'catalog' 
      },
      { 
         path: '/online-shop-vue/cart', 
         component: vCart, 
         name: 'cart', 
      }
   ]
})