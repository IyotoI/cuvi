<template>
  <v-form @submit.prevent="sendForm" v-model="isFormValid">
    <v-row dense>
      <v-col cols="12">
        <FormInput
          label="Correo"
          :model.sync="payload.email"
          prependInnerIcon="email"
          :rules="rules.email"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Contraseña"
          :model.sync="payload.password"
          prependInnerIcon="key"
          type="password"
          :rules="rules.password"
        />
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <Button
          :disabled="!isFormValid"
          class="white--text"
          label="Iniciar sesión"
          type="submit"
          color="#5FA52D"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { LoginController } from "~/controllers/login.controller";

export default {
  data() {
    return {
      isFormValid: true,

      rules: {
        name: [(v) => !!v || "El nombre es requerido"],
        email: [(v) => !!v || "El correo es requerido"],
        password: [(v) => !!v || "La contraseña es requerida"],
        roles: [(v) => !!v || "El perfil de usuario es requerido"],
      },
      payload: {
        email: "",
        password: "",
        // role: "",
      },
    };
  },

  methods: {
    postLogin: LoginController.post.login,

    sendForm() {
      this.postLogin(this.payload);
    },
  },
};
</script>
