<template>
   <div class="v-pacifier">
      <h1>Страница пуста</h1>
      <p>Приложение реализует логику только для 
         <router-link :to="{name: 'catalog'}">каталога товаров</router-link> и
         <router-link :to="{name: 'cart'}">корзины</router-link> 
      </p>
   </div>
</template>

<script>
   export default {
   name: 'v-pacifier'
}
</script>

<style lang="scss">
   .v-cart {
      width: 100%;
   }
</style>