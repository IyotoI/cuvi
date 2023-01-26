<template>
  <v-form v-model="isFormValid" @submit.prevent="sendForm">
    <v-row>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Modalidad academica"
          :model.sync="itemPayload.academicModality"
          :rules="rules.academicModality"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Semestres aprovados"
          :model.sync="itemPayload.approvedSemesters"
          :rules="rules.approvedSemesters"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.graduate"
          label="Graduado"
          :model.sync="itemPayload.graduate"
          :rules="rules.graduate"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Nombre de los estudios"
          :model.sync="itemPayload.nameStudies"
          :rules="rules.nameStudies"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <CalendarInput
          label="Fecha terminacion"
          :model.sync="itemPayload.terminationDate"
          :rules="rules.terminationDate"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Tarjeta profesional"
          :model.sync="itemPayload.professionalCard"
          :rules="rules.professionalCard"
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
import { CuviController } from "~/controllers/cuvi.controller";
import { propertiesGenerator } from "~/plugins/helpers";
import { VModel_Curriculum_interface } from "~/interfaces/curriculum_interface";

export default {
  data() {
    return {
      isFormValid: true,
      itemPayload: {
        academicModality: null,
        approvedSemesters: null,
        graduate: null,
        nameStudies: null,
        terminationDate: null,
        professionalCard: null,
      },
      items: {
        graduate: ["si", "no"],
      },
      rules: {
        academicModality: [(v) => !!v || "La modalidad academica es requerida"],
        approvedSemesters: [
          (v) => !!v || "Los semestres aprovados son requeridos",
        ],
        graduate: [(v) => !!v || "El graduado es requerido"],
        nameStudies: [(v) => !!v || "El nombre de los estudios es requerido"],
        terminationDate: [(v) => !!v || "La fecha de terminacion es requerida"],
        professionalCard: [(v) => !!v || "La tarjeta profesional es requerida"],
      },
    };
  },
  methods: {
    putCuviEducationHigh: CuviController.put.cuvi.educationHigh,

    closeDialog() {
      $nuxt.$emit("dialog", {
        isDialog: false,
      });
    },
    sendForm() {
      this.curriculumItemAcademicTrainingHighEducation = [
        ...this.curriculumItemAcademicTrainingHighEducation,
        this.itemPayload,
      ];
      this.putCuviEducationHigh(this.curriculumItem);
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
