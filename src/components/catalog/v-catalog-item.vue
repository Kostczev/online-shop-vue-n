<template>
   <div class="v-catalog-item">
      <img 
         class="v-catalog-item__img" 
         :src=" require('@/assets/images/books/' + product_data.image) " 
         alt="img"
      >
      <p class="v-catalog-item__name">{{product_data.name}}</p>
      <p class="v-catalog-item__author">{{product_data.author}}</p>
      <p class="v-catalog-item__price">{{product_data.price}} ₽</p>
      <button 
         class="v-catalog-item__add-to-cart-btn btn" 
         @click="addToCart">
         <img src="@/assets/icons/cart.svg" alt="">
         <div class="cart-text">+</div>
      </button>
   </div>
</template>

<script>
   export default {
   name: 'v-catalog-item',
   props: {
      product_data: {
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
      addToCart() {
         this.$emit('addToCart', this.product_data)
      }
   }
}
</script>

<style lang="scss">
//кастыль какой-то, по факту это дело должо было само подцепиться..
//@import '@/assets/styles/styles.scss';
   .v-catalog-item {
      position: relative;
      width: 190px;
      height: 290px;
      box-shadow: 0 0 8px 0 #e0e0e0;
      padding: 16px;
      margin: 16px;
      display: flex;
      flex-direction: column;
      &__img {
         height: 200px;
         object-fit: contain;
      }
      &__name {
         text-align: justify;
         margin-top: 10px;
         flex: 1 0 auto;
      }
      &__author {
         text-align: justify;
         margin-top: 5px;
         color: rgb(138, 138, 138);
      }
      &__price {
         margin-top: 5px;
         text-align: justify;
      }
      &__add-to-cart-btn {
         position: absolute;
         display: flex;
         bottom: 16px;
         right: 16px;
         cursor: pointer;
         user-select: none;
      }
   }
</style>