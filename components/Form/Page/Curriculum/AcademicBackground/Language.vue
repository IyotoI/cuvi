<template>
  <v-form>
    <v-row>
      <v-col cols="12" class="mb-n4">
        <FormSelect label="Idioma" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect label="Nivel" />
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
