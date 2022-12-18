<template>
   <div class="v-cart-item">
      <img 
         class="v-cart-item__image" 
         :src=" require('@/assets/images/books/' + cart_item_data.image)" 
         alt=""
      >
      <div class="v-cart-item__info">
         <p>{{cart_item_data.name}}</p>
         <p class="v-cart-item__author">{{cart_item_data.author}}</p>
      </div>
      <div class="v-cart-item__quantity">
         <p>Количество:</p>
         <p>
            <span class="v-cart-item__quantit-button" @click="decrementItem">-</span>
            {{cart_item_data.quantity}}
            <span class="v-cart-item__quantit-button" @click="incrementItem">+</span>
         </p>
      </div>
      <div class="v-cart-item__totle-price">
         {{cart_item_data.totalPrice}} ₽
      </div>
      <button @click="deleteFromCart" class="v-cart-item__del-btn">✕</button>
   </div>
</template>

<script>
   export default {
   name: 'v-cart-item',
   props: {
      cart_item_data: {
         type: Object,
         default() {
            return {}
         }
      }
   },
   data() {
      return {}
   },
   computed: {},
   methods: {
      deleteFromCart() {
         this.$emit('deleteFromCart')
      },
      decrementItem() {
         this.$emit('decrementItem');
      },
      incrementItem() {
         this.$emit('incrementItem');
      }
   },
   mounted() {}
}
</script>

<style lang="scss">
   .v-cart-item {
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 8px 0 #e0e0e0;
      padding: 16px 40px;
      margin: 16px;
      &__image {
         max-width: 50px;
      }
      &__info {
         width: 100%;
         max-width: 400px;
      }
      &__author {
         margin-top: 5px;
         color: rgb(138, 138, 138);
      }
      &__quantity {
         width: 100%;
         max-width: 100px;
      }
      &__totle-price {
         width: 100%;
         max-width: 100px;   
      }
      &__quantit-button {
         padding: 0 10px;
         margin: 5px;
         cursor: pointer;
      }
      &__del-btn {
         position: absolute;
         top: 5px;
         right: 5px;
         height: 22px;
         width: 22px;
         line-height: 0;
         cursor: pointer;
         background: none;
         border: none;
      }
   }
</style>