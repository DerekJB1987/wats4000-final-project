<template>
  <div>
    <h2>Location Search</h2>
    <form v-on:submit.prevent="getLocation">
        <p>Enter location name: <input type="text" v-model="query" placeholder="Seattle, US"> <button type="submit">Go</button></p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LocationSearch',
  data () {
    return {
      results: null,
      errors: [],
      query: '',
    }
  },
  methods: {
    getLocation: function(){
      console.log("hello")
      axios.get('https://api.sunrise-sunset.org/json', {
        params: {
          lat: '',
          lng: ''
        }
      })
      .then(response => {
        this.results = response.data.results;
      })
      .catch(error => {
        this.errors.push(error);
      });
    }
  }
}
</script>