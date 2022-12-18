<template>
   <div class="v-cart">
      <h1>КОРЗИНА</h1>
      <div v-if="CART.length == 0">
         <p>В корзине нет ни одного товара</p>
         <p>Вернитесь в 
            <router-link :to="{name: 'catalog'}">каталог</router-link> 
            и добавьте товары в корзину.</p>
      </div>
      <vCartItem 
         v-for="(item, index) in CART"
         :key="item.article"
         :cart_item_data="item"
         @deleteFromCart="deleteFromCart(index)"
         @incrementItem="incrementItem(index)"
         @decrementItem="decrementItem(index)"
      />
      <div class="v-cart__total" v-if="CART.length > 0">
         <p class="v-cart__total-title">Общая стоимость:</p>
         <p>{{cartTotalPrice}} ₽</p>
      </div>
   </div>
</template>

<script>
   import vCartItem from '@/components/cart/v-cart-item';
   import { mapActions, mapGetters } from 'vuex';
   export default {
   name: 'v-cart',
   components: {
      vCartItem
   },
   props: {
      cart_data: {
         type: Array,
         default() {
            return []
         }
      }
   },
   data() {
      return {}
   },
   computed: {
      ...mapGetters(['CART']),
      cartTotalPrice() {
         let sum = 0;
         this.CART.forEach(el => {
            sum += el.totalPrice;
         });
         return sum;
      }
   },
   methods: {
      ...mapActions([
         'DELETE_FROM_CART',
         'DECREMENT_CART_ITEM',
         'INCREMENT_CART_ITEM',
      ]),
      deleteFromCart(index) {
         this.DELETE_FROM_CART(index)
      },
      incrementItem(index) {
         this.INCREMENT_CART_ITEM(index);
      },
      decrementItem(index) {
         this.DECREMENT_CART_ITEM(index);
      }
   }
}
</script>

<style lang="scss">
   .v-cart {
      width: 100%;
      &__total {
         position: fixed;
         bottom: 0;
         left: 0;
         right: 0;
         display: flex;
         line-height: 40px;
         justify-content: center;
         background: rgb(14, 112, 112);
         font-size: 20px;
         color: rgb(19, 18, 18);
      }

      &__total-title {
         margin-right: 20px;
      }
   }
</style>