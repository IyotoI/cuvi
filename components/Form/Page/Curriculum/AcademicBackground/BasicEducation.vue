<template>
  <v-form>
    <v-row>
      <v-col cols="12" class="mb-n4">
        <FormSelect label="Educacion basica" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect label="Titulo obtenido" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput label="Fecha de grado" />
      </v-col>
      <v-col cols="12" class="mb-n4 d-flex justify-end mt-3">
        <Button
          class="white--text mr-2"
          label="Cancelar"
          color="secondary"
          @action="closeDialog"
        />
        <Button class="white--text" label="Guardar" color="#5FA52D" />
      </v-col>
      <!-- <v-col cols="12">
      <FormInput label="Dirección de correspondencia" />
    </v-col> -->
    </v-row>
  </v-form>
</template>

<script>
export default {
  methods: {
    closeDialog() {
      $nuxt.$emit("dialog", {
        isDialog: false,
      });
    },
  },
};
</script>

<style></style>
