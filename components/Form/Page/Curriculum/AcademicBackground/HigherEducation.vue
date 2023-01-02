<template>
  <v-form>
    <v-row>
      <v-col cols="12" class="mb-n4">
        <FormSelect label="Modalidad academica" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect label="Semestres aprovados" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect label="Graduado" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput label="Nombre de los estudios" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput label="Fecha terminacion" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput label="Tarjeta profesional" />
      </v-col>
      <v-col cols="12" class="mb-n4 d-flex justify-end mt-3">
        <Button
          class="white--text mr-2"
          label="Cancelar"
          @action="closeDialog"
          color="secondary"
        />
        <Button class="white--text" label="Guardar" color="#5FA52D" />
      </v-col>
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
