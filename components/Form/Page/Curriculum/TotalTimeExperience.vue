<template>
  <v-form>
    <v-row dense>
      <!-- <v-col cols="12" class="mb-6">
        <Button
          class="white--text"
          block
          label="Añadir tiempo total de experiencia"
          color="#5FA52D"
        />
      </v-col> -->
      <v-col cols="12">
        <FormSelect label="Ocupacion" />
      </v-col>
      <v-col cols="12">
        <FormSelect label="Tiempo de experiencia" />
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
