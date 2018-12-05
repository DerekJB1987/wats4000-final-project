<template>
  <div class="locationsearch">
    <p>
      <router-link v-bind:to="'locationsearch'">Location Search</router-link>
      
      <router-link v-bind:to="'/'">Sundial</router-link>
    </p>

    <h2>Location Search</h2>
      <p>A helpful resource to get geo coordinates is located at <a href="https://www.gps-coordinates.net/">GPS-coordinates.net</a></p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.locationsearch {
  font-size: 1.4rem;
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

</style>