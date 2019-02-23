<template>
<v-form>
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <v-select
            v-model="jobSelected"
            :items="items"
            label="Verkbeiðnanúmer">
          </v-select>
        </v-flex>

        <v-flex xs12 md4>
          <v-select
            v-model="name"
            :items="nameItems"
            label="Nafn starfsmanns">
          </v-select>
        </v-flex>

        <v-flex xs12 md4>
          <v-select
            v-model="done"
            :items="doneItems"
            label="Búið">
          </v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      done: "",
      doneItems: [
        "Ja",
        "Nei"
      ],
      jobSelected: "",
      name: "",
      nameItems: []
    }),
    props: {
      items: Array,
      names: Array
    }
  }
</script>