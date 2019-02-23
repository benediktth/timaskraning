<template>
  <div class="control">

    <div class="field is-horizontal ">
      <div class="field-body">
        <div class="field">
          <label class="label">Verknúmer</label>
          <input type="text" v-model="jobid" class="input"/>
        </div>
        <div class="field">
          <label class="label" >Tímar</label>
          <input type="number" v-model="hours" class="input"/>
        </div>
      </div>
    </div>

    <div class="field">
    </div>
    <div class="field">
      <label class="label">Dagur</label>
      <input type="date" v-model="date" class="input"/>
    </div>

    <div class="field">
      <label class="label">Lýsing</label>
      <textarea class="textarea" type="text" v-model="description" placeholder="Hvað var gert?"/>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button class="button is-link" v-on:click="SubmitHours()">Skrá</button>
      </div>
      <div class="control">
        <button class="button is-text" v-on:click="ClearData()">Hreinsa</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import firebase from "firebase";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data(){
    return{
      jobid: '',
      hours: '',
      date: this.DefaultDate(),
      description: ''
    }
  },
  methods: {
    SubmitHours(){
      var user = firebase.auth().currentUser
      if(user){
        const db = firebase.firestore();
        db.collection("verk").add({
          jobid: this.jobid,
          hours: this.hours,
          date: this.date,
          description: this.description
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      }
      else{
        console.log('no user');
      }
    },
    ClearData(){
      this.jobid = "";
      this.hours = "";
      this.description = "";
      this.date = "";
    },
    DefaultDate(){
      var d = new Date();
      return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    }
  }
};
</script>

<style>




</style>
