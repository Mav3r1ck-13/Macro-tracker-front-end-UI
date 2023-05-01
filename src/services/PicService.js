import axios from 'axios'

const API_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = '3WrQDqS1rcHbMRg7dhxI8vxxXWNZDmT0AJQkA2h7'

export default {
  getPic() {
    const url = `${API_URL}?api_key=${API_KEY}`
    return axios.get(url)
  }
}

