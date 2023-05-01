<template>
  <div>
      <h1>Daily Food List</h1>
      <div>
          <table>
              <thead>
                  <tr>
                      <th>Food Id</th>
                      <th>Protein</th>
                      <th>Carbs</th>
                      <th>Fats</th>
                      <th>Meal</th>
                      <th>Food Name</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in foods" v-bind:key="item.foodId">
                      <td>{{ item.foodId }}</td>
                      <td>{{ item.protein }}</td>
                      <td>{{ item.carbs }}</td>
                      <td>{{ item.fats }}</td>
                      <td>{{ item.meal }}</td>
                      <td>{{ item.foodName }}</td>
                  </tr>
              </tbody>
          </table>
      </div>
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
        foodListService.getAllFood().then(response => {
            this.foods = response.data;
            
        })
    }
}
</script>

<style>

</style>