<template>
  <v-form v-model="isFormValid" @submit.prevent="sendForm">
    <v-row>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.idiom"
          label="Idioma"
          :model.sync="itemPayload.idiom"
          :rules="rules.idiom"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.languageLevel"
          label="Lo habla"
          :model.sync="itemPayload.to_speak"
          :rules="rules.languageLevel"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.languageLevel"
          label="lo lee"
          :model.sync="itemPayload.to_read"
          :rules="rules.languageLevel"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.languageLevel"
          label="Lo escribe"
          :model.sync="itemPayload.to_whrite"
          :rules="rules.languageLevel"
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
import { propertiesGenerator } from "~/plugins/helpers";
import { VModel_Curriculum_interface } from "~/interfaces/curriculum_interface";

export default {
  data() {
    return {
      isFormValid: true,
      itemPayload: {
        idiom: null,
        to_speak: null,
        to_read: null,
        to_whrite: null,
      },
      items: {
        idiom: ["ingles", "frances"],
        languageLevel: ["r", "b", "mb"],
      },
      rules: {
        idiom: [(v) => !!v || "El idioma es requerido"],
        languageLevel: [(v) => !!v || "El nivel es requerido"],
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
      this.curriculumItemAcademicTrainingLenguage = [
        ...this.curriculumItemAcademicTrainingLenguage,
        this.itemPayload,
      ];

      this.closeDialog();
    },
  },
  computed: {
    ...propertiesGenerator([...VModel_Curriculum_interface], {
      path: "curriculum_store",
      mut: "curriculum_store/setProperty",
    }),
  },
};
</script>
