<template>
  <v-form @submit.prevent="sendForm">
    <v-row dense>
      <v-col cols="12">
        <FormInput label="Nombre" />
      </v-col>
      <v-col cols="12">
        <FormInput label="Correo" />
      </v-col>
      <v-col cols="12">
        <FormInput label="Contraseña" />
      </v-col>
      <v-col cols="12">
        <FormSelect label="Perfil de usuario" />
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <Button label="Registrar" type="submit" color="#5FA52D" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  methods: {
    sendForm() {
      $nuxt.$router.push({ name: "login" });
    },
  },
};
</script>
