<template>
  <div class="suntimes">
    <p>
      <router-link v-bind:to="'locationsearch'">Location Search</router-link>

      <router-link v-bind:to="'/'">Sun Times</router-link>

    </p>

    <form v-on:submit.prevent="getLocation">
      <p>Enter a latitude:
        <input type="text" v-model="lat" placeholder="47.606209"> and longitude:
        <input type="text" v-model="lng" placeholder="-122.332069"> to find your sunrise and sunset times.
        <button type="submit">Search</button>
      </p>
    </form>
    <ul v-if="results" class="results">
      <li v-for="(key,index) in keys" :key="index" class="item">
        <p>
          <strong>{{key}}</strong>
        </p>
        <p>{{toLocalTZ(results[key])}}</p>
      </li>
    </ul>
    <p>This API is attributed to sunrise-sunset.org located at
      <a href="https://sunrise-sunset.org/" target="_blank">sunrise-sunset.org</a>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Suntimes",
  data() {
    return {
      results: null,
      lat: "",
      lng: "",
      keys: []
    };
  },
  methods: {
    getLocation: function() {
      console.log("hello");
      axios
        .get("https://api.sunrise-sunset.org/json", {
          params: {
            lat: this.lat,
            lng: this.lng
          }
        })
        .then(response => {
          this.results = response.data.results;
          this.keys = Object.keys(this.results);
          console.log('times')
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    toLocalTZ: function (t) {
      let hms = t.split('')[0].split(':');
      let ampm = t.split(' ')[1];
      let hour = new Date();//format('')
      let utcDay = this.$moment.utc(new Date());//format('D MMM,YYYY')
        utcDay = utcDay.set({
          'hour': hms[0],
          'minute': hms[1],
          'second': hms[2]
        });
        return utcDay.local().format('h:mm:ss')
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sundial {
  font-size: 1.4rem;
}

input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1,
h2 {
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
  width: 300px;
  min-height: 100px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
</style>