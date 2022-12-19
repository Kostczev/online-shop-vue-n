<template>
   <div class="v-catalog">
      <div class="v-catalog__tips">
         <div class="form-radio-btn">
            <input id="radio-1" type="radio" 
               name="tips" value="All" v-model="tip" 
               checked>
            <label for="radio-1">Все <span class="visible-on-the-pc">книги</span></label>
         </div>
         <div class="form-radio-btn">
            <input id="radio-2" type="radio"
               name="tips" value="New" v-model="tip">
            <label for="radio-2">Новинки 
               <span class="visible-on-the-pc">литературы</span></label>
         </div>
         <div class="form-radio-btn">
            <input id="radio-3" type="radio" 
               name="tips" value="Top" v-model="tip">
            <label for="radio-3">Лучшие 
               <span class="visible-on-the-pc">из лучших</span></label>
         </div>
         <div class="form-radio-btn">
            <input id="radio-4" type="radio" 
               name="tips" value="Coming" v-model="tip">
            <label for="radio-4">Скоро 
               <span class="visible-on-the-pc">в продаже</span></label>
         </div>
      </div>
      <div class="v-catalog__list">
         <vCatalogItem 
            v-for="product in filtredProducts"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
         />
      </div>
   </div>
</template>

<script>
   import vCatalogItem from '@/components/catalog/v-catalog-item';
   import { mapGetters, mapActions } from 'vuex';

   export default {
   name: 'v-catalog',
   components: {
      vCatalogItem
   },
   data() {
      return {
         tip: '',
         sortedProduct: []
      }
   },
   computed: { 
      ...mapGetters(["PRODUCTS", "CART"]),
      filtredProducts() {
         if(this.sortedProduct.length > 0) {
            return this.sortedProduct;
         } else {
            return this.PRODUCTS;
         }
      }
   },
   methods: {
      ...mapActions([
         "GET_PRODUCTS_FROM_API",
         "ADD_TO_CART"
      ]),
      addToCart(data) {
         this.ADD_TO_CART(data);
      }
   },
   watch: {
      tip(val) {
         let fSortedProduc = [];
         this.PRODUCTS.map(function(item) {
            if(item.tips === val) {
               fSortedProduc.push(item);
            }
         })
         this.sortedProduct = fSortedProduc;
      }
   }, 
   mounted() {
      this.GET_PRODUCTS_FROM_API()
   }
}
</script>

<style lang="scss">
   .visible-on-the-pc {
      @media (max-width: 700px) {
         display: none;
      }
   }

   .form-radio-btn {
      display: inline-block;

      & input[type=radio] {
         display: none;
      }

      & label {
         transition: .3s;
         transition-property: color;
         
         display: inline-block;
         cursor: pointer;
         padding: 0px 15px;
         line-height: 34px;
         user-select: none;
      }

      & input[type=radio]:checked + label {
         color: rgb(18, 153, 153);
      }
      &  label:hover {
         color: rgb(21, 146, 146);
      }
   }

   .v-catalog {
      &__tips {
         display: flex;
         justify-content: space-around;
         list-style: none;
         margin: 15px 0;
      }
      &__tip {
         transition: .3s;
         transition-property: color;
         padding: 10px;
         cursor: pointer;
         &:hover {
            color: rgb(21, 146, 146);
         }
      }
      &__list {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-around;
         align-items: center;
      }
   }
</style>