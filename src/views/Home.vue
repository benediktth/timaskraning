<template>
  <div>
    <div id="nav">
      <router-link to="/">Skrá tíma</router-link> |
      <router-link to="/skratima">Skoða tíma</router-link>
    </div>
    <div class="section">
      <router-view />
    </div>
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
