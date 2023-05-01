<template>
  <div class="about-page">
    <h1>Random Daily NASA Picture</h1>
     
    <img :src="picData.url" :alt="picData.title">
    <pic-service></pic-service>
  
  </div>
</template>

<script>
import PicService from '../services/PicService.js'

export default {
  name: 'AboutView',
  components: {
    PicService
  },
  data() {
    return {
      picData: null
    }
  },
  created() {
    PicService.getPic().then(response => {
      this.picData = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
