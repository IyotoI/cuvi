<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Button
          icon="chevron-left"
          color="#5FA52D"
          largeIcon
          @action="goBack"
          class="mr-n4"
        />
        <span> Volver </span>
      </v-col>
      <v-col class="paged">
        <h2 class="text-center mb-6">Datos personales</h2>
        <Form nameForm="personalInformation" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goBack() {
      $nuxt.$router.push({ name: "curriculum" });
    },
  },
};
</script>

<style>
.paged {
  height: calc(100vh - 270px);
  overflow: scroll;
  padding: 0px 12% 0px 12%;
}
</style>
