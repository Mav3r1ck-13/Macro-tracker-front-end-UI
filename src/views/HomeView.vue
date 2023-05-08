<template>
  <div class="home">
    <h1>Home</h1>
    <p>You must be authenticated to see this</p>
    <FoodList></FoodList>
    <button @click="addFood">Add Food</button>
    <button @click="setYourMacros">Set Your Macros</button>
  </div>
  
</template>

<script>

import FoodList from '../components/FoodList.vue'

export default {
  name: "home-page",

  components: {
    FoodList
  }
};
</script>
