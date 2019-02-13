<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Skrá tíma</router-link> |
      <router-link to="/skratima">Skoða tíma</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
