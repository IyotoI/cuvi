<template>
  <v-form @submit.prevent="sendForm" v-model="isFormValid">
    <v-row dense>
      <v-col cols="12">
        <FormInput
          label="Nombre"
          prependInnerIcon="account"
          :rules="rules.name"
          :model.sync="payload.name"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Correo"
          prependInnerIcon="email"
          :rules="rules.email"
          :model.sync="payload.email"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Contraseña"
          prependInnerIcon="key"
          :model.sync="payload.password"
          :rules="rules.password"
          type="password"
        />
      </v-col>
      <!-- <v-col cols="12">
        <FormSelect
          label="Perfil de usuario"
          prependInnerIcon="shield"
          :items="items.rols"
          :rules="rules.roles"
          :model.sync="payload.role"
        />
      </v-col> -->
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
          :disabled="!isFormValid || !checkbox"
          type="submit"
          color="#5FA52D"
          class="white--text"
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
      checkbox: false,
      items: {
        rols: [
          "admin",
          "talent",
          "premiumTalent",
          "employer",
          "premiemEmployer",
        ],
      },
      rules: {
        name: [(v) => !!v || "El nombre es requerido"],
        email: [(v) => !!v || "El correo es requerido"],
        password: [(v) => !!v || "La contraseña es requerida"],
        roles: [(v) => !!v || "El perfil de usuario es requerido"],
      },
      payload: {
        name: "",
        email: "",
        password: "",
        // role: "",
      },
    };
  },
  methods: {
    postRegister: LoginController.post.register,

    sendForm() {
      this.postRegister(this.payload);
      // $nuxt.$router.push({ name: "login" });
    },
  },
};
</script>
