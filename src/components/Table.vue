<template>
  <div>
    <ToFrom />
    <FilterOptions :items="this.verkbeidnanumer"/>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.description }}</td>
        <td class="text-xs-left">{{ props.item.jobid }}</td>
        <td class="text-xs-left">{{ props.item.hours }}</td>
        <td class="text-xs-left">{{ props.item.date }}</td>
        <td class="text-xs-left">{{ props.item.userid }}</td>
        <td class="text-xs-left">{{ props.item.done }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import firebase from "firebase";
import FilterOptions from "./FilterOptions.vue";
import ToFrom from "./ToFrom.vue";

  export default {
    data () {
      return {
        headers: [
          {
            text: 'Lýsing',
            align: 'left',
            sortable: false,
            value: 'description'
          },
          { text: 'Verkbeiðnanúmer', value: 'jobid' },
          { text: 'Tímar', value: 'hours' },
          { text: 'Dagsetning', value: 'date' },
          { text: 'Starfsmaður', value: 'userid' },
          { text: 'Búið að yfirfara', value: 'done' }
        ],
        items: [],
        verkbeidnanumer: [],
        starfsmenn: []
      }
    },
    components: {
      FilterOptions,
      ToFrom
    },
    methods: {
      getItems: function() {
        const db = firebase.firestore();
        db.collection("verk").get()
          .then((snapshot) => {
            let itemsFromFirebase = [];
            snapshot.forEach(doc => {
              itemsFromFirebase.push(doc.data());
            });
            this.items = itemsFromFirebase;
            console.log(this);
            this.updateDropdowns();
          })
          .catch((err) => {
            console.log(err);
          })
      },
      updateDropdowns: function () {
        let verkbeidnanumer = new Set();
        // let names = new Set();
        this.items.map(item => {
          verkbeidnanumer.add(item.jobid);
          // names.add(item.name);
        })
        console.log(verkbeidnanumer);
        this.verkbeidnanumer = [...verkbeidnanumer];
        // this.starfsmenn = names;
      }
    },
    beforeMount() {
      this.getItems();
    },
    updated() {
      console.log("Update!")
    }
  }
</script>
