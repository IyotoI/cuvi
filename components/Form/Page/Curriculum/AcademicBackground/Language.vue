<template>
  <v-form v-model="isFormValid" @submit.prevent="sendForm">
    <v-row>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.language"
          label="Idioma"
          :model.sync="itemPayload.language"
          :rules="rules.language"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.level"
          label="Nivel"
          :model.sync="itemPayload.level"
          :rules="rules.level"
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
        language: null,
        level: null,
      },
      items: {
        language: ["ingles", "frances"],
        level: ["lo hablo", "lo leo", "lo escribo"],
      },
      rules: {
        language: [(v) => !!v || "El lenguaje es requerido"],
        level: [(v) => !!v || "El nivel es requerido"],
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
