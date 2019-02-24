<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      
      <v-flex xs12>
        <v-text-field
          v-model="jobid"
          label="Verknúmer"
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()">
        </v-text-field>
      </v-flex>

      <v-flex xs12>
        <v-text-field
          v-model="hours"
          label="Tímar"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()">
        </v-text-field>
      </v-flex>

      <v-flex xs12>
        <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
          >
          <v-text-field
            slot="activator"
            v-model="date"
            label="Dagur"
            prepend-icon="event"
            readonly>
          </v-text-field>
          <v-date-picker v-model="date" @input="menu2 = false" color="blue" ></v-date-picker>
        </v-menu>
      </v-flex>

      <v-flex xs12>
        <v-textarea
          name="input-7-1"
          label="Lýsing"
          v-model="description">
        </v-textarea>
      </v-flex>

      <v-flex xs12 right>
        <v-btn @click="submit">Skrá</v-btn>
        <v-btn @click="clear">Hreinsa</v-btn>
      </v-flex>

    </v-layout>
  </v-container>




</template>

<script>
import firebase from "firebase";
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        }
      }
    },

    data: () => ({
      jobid: '',
      hours: '',
      date: new Date().toISOString().substr(0, 10),
      description: '',
      menu2: false,
    }),

    // ekki notað en geymi þetta hér
    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    },

    methods: {
      submit () {
        //this.$v.$touch()
        console.log(this.jobid);
        console.log(this.hours);
        console.log(this.data);
        console.log(this.description);

        var user = firebase.auth().currentUser;

        if (user) {
          firebase.firestore()
            .collection("verk")
            .add({
              //userid: user.uid,
              jobid: this.jobid,
              hours: this.hours,
              //date: this.date,
              description: this.data
          })
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
        } else {
          console.log('Ekki user');
        }
      },
      clear () {
        this.$v.$reset()
        this.jobid = ''
        this.hours = ''
        this.date = ''
        this.description = ''
      }
    }
  }
</script>