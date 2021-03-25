<template>
  <div id="app">
    <!--Navbar Here -->
    <div>
      <nav>
        <div class="header">
          <h3>Geocoder</h3>
        </div>
      </nav>
    </div>
    <!--Index Page Here -->
    <index />
  </div>
</template>

<script>
import index from "./components/index.vue";
export default {
  name: "App",
  components: {
    index,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  background: #fafcfd;
  margin: 0;
}

nav {
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 58, 78, 0.15);
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 50px;
}

.header h3 {
  color: #1f2a53;
  font-weight: 600;
}
</style>
