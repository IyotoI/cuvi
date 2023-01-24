<template>
  <v-form v-model="isFormValid" @submit.prevent="sendForm">
    <v-row dense>
      <v-col cols="12">
        <FormInput
          label="Ocupacion"
          :model.sync="itemPayload.occupation"
          :rules="rules.occupation"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Tiempo de experiencia"
          :model.sync="itemPayload.timeExperience"
          :rules="rules.timeExperience"
        />
      </v-col>

      <v-col cols="12" class="mb-n4 d-flex justify-end mt-3">
        <Button
          @action="closeDialog"
          class="white--text mr-2"
          color="secondary"
          label="Cancelar"
        />
        <Button
          class="white--text"
          color="#5FA52D"
          :disabled="!isFormValid"
          label="Guardar"
          type="submit"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      isFormValid: true,
      itemPayload: {
        occupation: null,
        timeExperience: null,
      },
      rules: {
        occupation: [(v) => !!v || "La ocupacion es requerida"],
        timeExperience: [(v) => !!v || "El tiempo de experiencia es requerido"],
      },
    };
  },
  methods: {
    closeDialog() {
      $nuxt.$emit("dialog", {
        isDialog: false,
      });
    },
    sendForm() {
      this.cleanForm();
    },
    cleanForm() {
      this.itemPayload = {};
    },
  },
};
</script>
