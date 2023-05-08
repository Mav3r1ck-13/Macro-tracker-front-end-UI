import axios from 'axios';



export default {
    //service call
    getAllFood() {
        return axios.get('/daily_food_intake');
    }
}