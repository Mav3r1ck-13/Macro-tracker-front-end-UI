<template>

       
  </template>
  
  <script>
  
 
  
  export default {
      name: 'food-list',
      data() {
          return {
              foods: [],
          }
      },
      created() {
          foodListService.getAllFood().then(response => {
              this.foods = response.data;
              
          })
      }
  }
  </script>
  
  <style>
  
  </style>