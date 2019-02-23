<template>
  <div class="about">
    <h1>Hérna geturðu séð tímana</h1>
    <div data-app>
      <Table />
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";

export default {
  name: "skodatima",
  components: {
    Table
  }
};
</script>