<template>
   <div class="app">
      <vMainWrapper />
   </div>
</template>

<script>
import vMainWrapper from '@/components/v-main-wrapper'

export default {
   name: 'App',
   components: {
      vMainWrapper
   }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
   margin: 0;
}
p {
   margin-block: 0;
}
ul {
   padding-inline-start: 0;
}
</style>
