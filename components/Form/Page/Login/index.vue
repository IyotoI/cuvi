<template>
  <v-form @submit.prevent="sendForm">
    <v-row dense>
      <v-col cols="12">
        <FormInput label="Correo" />
      </v-col>
      <v-col cols="12">
        <FormInput label="Contraseña" />
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <Button label="Iniciar sesión" type="submit" color="#5FA52D" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  methods: {
    sendForm() {
      $nuxt.$router.push({ name: "curriculum" });
    },
  },
};
</script>
