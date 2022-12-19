<template>
   <div class="v-main-wrapper">
      <header class="v-main-wrapper__header">
         <div class="v-main-wrapper__header-content container">
            <router-link :to="{name: 'pacifier'}" class="v-main-wrapper__header-item">
               <img src="@/assets/icons/home.svg" alt="">
            </router-link>
            <router-link :to="{name: 'pacifier'}" class="v-main-wrapper__header-item">
               ПРЕДЗАКАЗ
            </router-link>
            <router-link :to="{name: 'catalog'}" class="v-main-wrapper__header-item">
               КНИГИ
            </router-link>
            <router-link :to="{name: 'pacifier'}" class="v-main-wrapper__header-item">
               АКЦИИ
            </router-link>
            <router-link :to="{name: 'cart'}" class="v-main-wrapper__header-item">
               <img src="@/assets/icons/cart.svg" alt="">
               <div class="v-main-wrapper__cart-quantity cart-text">{{CART.length}}</div>
            </router-link>
         </div>
      </header>
      <main class="v-main-wrapper__main container">
         <router-view></router-view>
      </main>
      <footer class="v-main-wrapper__footer" @click="removeLocalStorageCart">
         c. 2022. Чурцев Константин.
      </footer>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
   name: 'v-main-wrapper',
   components: {},   //дети
   props: {},        //данные приходящие от родителя
   data() {          //персональные данные
      return {}
   },
   computed: mapGetters(["CART"]),     //вычисляемые свойства
   methods: {
      removeLocalStorageCart() {
         localStorage.removeItem('cart');
      }
   },      //клики, покз окон, скрытие показ элементов
   watch: {},        //слежка за изменением чего либо и действием при этом
   mounted() {}      //отрабатывает после загрузки элемента       
}
</script>

<style lang="scss">
   .v-main-wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      &__header {
         background: rgb(14, 112, 112);
      }
      &__header-content {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      &__header-item {
         transition: .3s;
         transition-property: background;
         position: relative;
         height: 40px;
         padding: 0 10px;
         line-height: 40px;
         color: #000;
         cursor: pointer;
         user-select: none;
         text-decoration: none;
         & img {
            padding: 3px 10px;
            height: 30px;
         }
         &:hover {
            background: rgb(21, 146, 146);
         }
      }
      &__cart-quantity {
         position: absolute;
         top: 4px;
         right: 15px;
      }
      &__main {
         flex: 1 1 auto;
      }
      &__footer {
         background: rgb(25, 146, 146);
         height: 30px;
         line-height: 30px;
         margin-top: 30px;
      }
   }
   .container {
      max-width: 900px;
      width: 100%;
      margin: 0 auto;
   }
   .router-link-active {
      background: rgb(18, 153, 153);
   }
   .cart-text {
      color: #fff;
      background: rgb(25, 146, 146);
      padding: 10px 5px;
      line-height: 0;
      border-radius: 50%;
      user-select: none;
   }

</style>