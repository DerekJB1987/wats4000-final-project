<template>
  <div>
    <h2>Location Search</h2>
    <form v-on:submit.prevent="getLocation">
        <p>Enter a latitude: <input type="text" v-model="lat" placeholder="47.606209"> and longitude: <input type="text" v-model="lng" placeholder="-122.332069"> to find your sunrise and sunset times. <button type="submit">Search</button></p>
    </form>
      <ul v-if="results && results.length > 0" class="results">
      <li v-for="item of results" class="item">
        <p><strong>{{item.word}}</strong></p>
      </li>
    </ul>
    <p>This API is attributed to sunrise-sunset.org located at https://sunrise-sunset.org/api</p>
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
<!-- Add "scoped" attribute to limit CSS to this component only -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rhymesaurus {
  font-size: 1.4rem;
}
input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
}
button{
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1, h2 {
  font-weight: normal;
}
ul.results {
  list-style-type: none;
  padding: 0;
}
.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0,0,0,0.7);
}
ul.errors {
  list-style-type: none;
}
</style>