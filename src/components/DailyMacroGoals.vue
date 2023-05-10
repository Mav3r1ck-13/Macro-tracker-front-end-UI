<template>
    <div>
      <table>
        <thead>
          <tr>
            <th class="box">Protein</th>
            <th class="box">Carbs</th>
            <th class="box">Fats</th>
            <th class="box">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in foods" v-bind:key="item.macrosGoalId">
            <td class="box">{{ item.protein }}</td>
            <td class="box">{{ item.carbs }}</td>
            <td class="box">{{ item.fats }}</td>
            <td class="box">{{ item.calories }}</td>
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

.box {
  border: 1px solid #ccc;
  padding: 5px;
  text-align: center;
  font-size: 15px;
  border-radius: 5px;
}

th {
  background-color: #24acb8;
  font-size: 10px;
  font-weight: bold;
  border-radius: 5px;
}

thead th:first-child {
  border-top-left-radius: 5px;
}

thead th:last-child {
  border-top-right-radius: 5px;
}

tbody tr:last-child td:first-child {
  border-bottom-left-radius: 5px;
}

tbody tr:last-child td:last-child {
  border-bottom-right-radius: 5px;
}


  </style>