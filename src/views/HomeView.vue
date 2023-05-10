<template>
  <div class="home">
    
    <DailyMacroGoals></DailyMacroGoals>
    <button @click="addFood">Add Food</button>
    <button @click="setYourMacros">Set Your Macros</button>
  </div>
  
</template>

<script>


import DailyMacroGoals from '../components/DailyMacroGoals.vue';

export default {
  name: "home-page",

  components: {

    DailyMacroGoals
  }
};
</script>
