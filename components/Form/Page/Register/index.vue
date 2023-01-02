<template>
  <v-form @submit.prevent="sendForm">
    <v-row dense>
      <v-col cols="12">
        <FormInput label="Nombre" prependInnerIcon="account" />
      </v-col>
      <v-col cols="12">
        <FormInput label="Correo" prependInnerIcon="email" />
      </v-col>
      <v-col cols="12">
        <FormInput label="Contraseña" prependInnerIcon="key" />
      </v-col>
      <v-col cols="12">
        <FormSelect label="Perfil de usuario" prependInnerIcon="shield" />
      </v-col>
      <v-col class="text-center mb-1 d-flex justify-center" cols="12">
        <div>
          Estoy deacuerdo con los<br />
          <NuxtLink to="/register">terminos y condiciones</NuxtLink>
        </div>

        <v-checkbox v-model="checkbox"></v-checkbox>
        <!-- <NuxtLink to="/register">Registrate</NuxtLink> -->
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <Button
          label="Registrar"
          type="submit"
          color="#5FA52D"
          class="white--text"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
    };
  },
  methods: {
    sendForm() {
      $nuxt.$router.push({ name: "login" });
    },
  },
};
</script>
