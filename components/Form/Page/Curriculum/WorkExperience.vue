<template>
  <v-form>
    <v-row>
      <v-col cols="12" class="mb-n4">
        <FormInput label="Empresa o entidad" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect label="Tipo" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect label="Pais" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect label="Departamento" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect label="Municipio" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput label="Correo electronico entidad" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput label="Telefono" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput label="Fecha de ingreso" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput label="Fecha de retiro" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput label="Cargo" />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput label="Dependencia " />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput label="Direccion" />
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
