<template>
  
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.description }}</td>
        <td class="text-xs-right">{{ props.item.jobid }}</td>
        <td class="text-xs-right">{{ props.item.hours }}</td>
        <td class="text-xs-right">{{ props.item.date }}</td>
        <td class="text-xs-right">{{ props.item.userid }}</td>
        <td class="text-xs-right">{{ props.item.done }}</td>
      </template>
    </v-data-table>
  
</template>

<script>
import firebase from "firebase";

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
        // desserts: [
        //   {
        //     description: 'Frozen Yogurt',
        //     jobid: 159,
        //     hours: 6.0,
        //     date: 24,
        //     userid: 4.0,
        //     done: '1%'
        //   },
        //   {
        //     description: 'Ice cream sandwich',
        //     jobid: 237,
        //     hours: 9.0,
        //     date: 37,
        //     userid: 4.3,
        //     done: '1%'
        //   },
        //   {
        //     description: 'Eclair',
        //     jobid: 262,
        //     hours: 16.0,
        //     date: 23,
        //     userid: 6.0,
        //     done: '7%'
        //   },
        //   {
        //     description: 'Cupcake',
        //     jobid: 305,
        //     hours: 3.7,
        //     date: 67,
        //     userid: 4.3,
        //     done: '8%'
        //   },
        //   {
        //     description: 'Gingerbread',
        //     jobid: 356,
        //     hours: 16.0,
        //     date: 49,
        //     userid: 3.9,
        //     done: '16%'
        //   },
        //   {
        //     description: 'Jelly bean',
        //     jobid: 375,
        //     hours: 0.0,
        //     date: 94,
        //     userid: 0.0,
        //     done: '0%'
        //   },
        //   {
        //     description: 'Lollipop',
        //     jobid: 392,
        //     hours: 0.2,
        //     date: 98,
        //     userid: 0,
        //     done: '2%'
        //   },
        //   {
        //     description: 'Honeycomb',
        //     jobid: 408,
        //     hours: 3.2,
        //     date: 87,
        //     userid: 6.5,
        //     done: '45%'
        //   },
        //   {
        //     description: 'Donut',
        //     jobid: 452,
        //     hours: 25.0,
        //     date: 51,
        //     userid: 4.9,
        //     done: '22%'
        //   },
        //   {
        //     description: 'KitKat',
        //     jobid: 518,
        //     hours: 26.0,
        //     date: 65,
        //     userid: 7,
        //     done: '6%'
        //   }
        // ],
        pagination: {
          sync: {
            rowsPerPage: -1
          }
        }
      }
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
          })
          .catch((err) => {
            console.log(err);
          })
      }
    },
    beforeMount() {
      this.getItems()
    },
  }
</script>