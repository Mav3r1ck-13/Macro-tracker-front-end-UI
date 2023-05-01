<template>
  <div class="home">
   
    <food-list></food-list>
  </div>
</template>

<script>
// @ is an alias to /src

import FoodList from '../components/FoodList.vue'

export default {
  name: 'HomeView',
  components: {
    FoodList
  }
}
</script>
