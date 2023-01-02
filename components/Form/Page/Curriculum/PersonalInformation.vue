<template>
  <v-form>
    <v-row dense>
      <v-col cols="12">
        <FormInput label="Primer apellido" />
      </v-col>
      <v-col cols="12">
        <FormInput label="Segundo apellido (o de casada)" />
      </v-col>
      <v-col cols="12">
        <FormSelect label="Tipo de documento" />
      </v-col>
      <v-col cols="12">
        <FormInput label="Documento" />
      </v-col>
      <v-col cols="12">
        <FormSelect label="Sexo" />
      </v-col>
      <v-col cols="12">
        <FormSelect label="Nacionalidad" />
      </v-col>
      <v-col cols="12">
        <FormInput label="Libreta militar" />
      </v-col>
      <v-col cols="12">
        <FormInput label="Lugar de nacimiento" />
      </v-col>
      <v-col cols="12">
        <FormInput label="Fecha de nacimiento" />
      </v-col>
      <v-col cols="12">
        <FormInput label="Dirección de correspondencia" />
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <Button
          class="white--text"
          label="Guardar"
          color="#5FA52D"
          @action="goBack"
        />
      </v-col>
    </v-row>
  </v-form>
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
