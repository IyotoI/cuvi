<template>
  <v-form v-model="isFormValid" @submit.prevent="sendForm">
    <v-row>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.basicEducation"
          label="Educacion basica"
          :model.sync="itemPayload.basicEducation"
          :rules="rules.basicEducation"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.titleObtained"
          label="Titulo obtenido"
          :model.sync="itemPayload.titleObtained"
          :rules="rules.titleObtained"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <CalendarInput
          label="Fecha de grado"
          :model.sync="itemPayload.dateDegree"
          :rules="rules.dateDegree"
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
        basicEducation: null,
        titleObtained: null,
        dateDegree: null,
      },
      items: {
        basicEducation: ["primaria", "secundaria", "media"],
        titleObtained: ["bachiller"],
      },
      rules: {
        basicEducation: [(v) => !!v || "La educacion basica es requerida"],
        titleObtained: [(v) => !!v || "El titulo obtenido es requerido"],
        dateDegree: [(v) => !!v || "La fecha de grado es requerida"],
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
