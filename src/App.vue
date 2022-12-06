<template>
  <div class="container">
    <nav>
      <router-link to="/">Пицца</router-link> |
      <router-link to="/drinks">Напитки</router-link> |
      <router-link to="/bakset">Корзина</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{ 
  background-color: rgb(230, 230, 230);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #e41b47;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

@media screen and (max-width: 325px) {
  .container {
    min-width: 325px
  }
}

p {
  margin: 0;
}

button {
    padding: 10px;
    border: none;
    cursor: pointer;
    color: #fff;
    transition: .3s;
    margin: 15px 0 15px 0;
    background-color: #e41b47;
    font-size: 14px;
    border-radius: 8px;
} 

button:hover {
    color: gold;
    background-color: #881931;
}
</style>
