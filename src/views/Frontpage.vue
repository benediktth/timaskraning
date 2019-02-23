<template>
  <div class="home">
    <HelloWorld msg="Velkomin á tímaskráningar síðu Svenna og Benna" />
    
    <div class="verk">
      <p>Verknúmer:</p>
      <input type="text" v-model="jobid"/>
    </div>

    <div class="hours">
      <p>Tímar:</p>
      <input type="text" v-model="hours"/>
    </div>

    <div class="date">
      <p>Dagur:</p>
      <input type="date" v-model="date"/>
    </div>

    <div class="description">
      <p>Lýsing:</p>
      <input type="text" v-model="description"/>
    </div>
    
    <button class="btn" type="button" v-on:click="SubmitHours()">Skrá</button>

  </div>
</template>

<script>
/* eslint-disable */ 
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data(){
    return{
      jobid: '1',
      hours: '3',
      date: Date.now,
      description: 'hæ'
    }
  },
  methods: {
    SubmitHours(){
      
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
