<template>
<div>
          <table>
              <thead>
                  <tr>
                    
                      <th>Protein</th>
                      <th>Carbs</th>
                      <th>Fats</th>
                      <th>Calories</th>
                    
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in foods" v-bind:key="item.macrosGoalId">
                    
                      <td>{{ item.protein }}</td>
                      <td>{{ item.carbs }}</td>
                      <td>{{ item.fats }}</td>
                      <td>{{ item.calories }}</td>
                     
                  </tr>
              </tbody>
          </table>
      </div>
       
  </template>
  
  <script>
  
  import foodListService from '../services/FoodListService.js'
  
  export default {
      name: 'food-list',
      data() {
          return {
              foods: [],
          }
      },
      created() {
          foodListService.getMacros().then(response => {
              this.foods = response.data;
              
          })
      }
  }
  </script>
  
  <style>
  
  </style>