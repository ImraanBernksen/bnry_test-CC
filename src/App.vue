<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

#app {
  font-family: 'Righteous', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #2D277D;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  padding: 20px;
}

</style>
