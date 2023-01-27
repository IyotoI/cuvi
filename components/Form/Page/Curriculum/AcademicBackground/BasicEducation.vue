<template>
  <v-form v-model="isFormValid" @submit.prevent="sendForm">
    <v-row>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Titulo obtenido"
          :model.sync="curriculumItemAcademicTrainingBasicHalfEducationTitle"
          :rules="rules.titleObtained"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.grade"
          label="Grado cursado"
          :model.sync="curriculumItemAcademicTrainingBasicHalfEducationGrade"
          :rules="rules.grade"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <CalendarInput
          label="Fecha de grado"
          :model.sync="
            curriculumItemAcademicTrainingBasicHalfEducationDategrade
          "
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
import { CuviController } from "~/controllers/cuvi.controller";
import { propertiesGenerator } from "~/plugins/helpers";
import { VModel_Curriculum_interface } from "~/interfaces/curriculum_interface";

export default {
  data() {
    return {
      isFormValid: true,
      items: {
        grade: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      },
      rules: {
        titleObtained: [(v) => !!v || "El titulo obtenido es requerido"],
        grade: [(v) => !!v || "El grado cursado es requerido"],
        dateDegree: [(v) => !!v || "La fecha de grado es requerida"],
      },
    };
  },
  methods: {
    putCuviEducationBasic: CuviController.put.cuvi.educationBasic,

    closeDialog() {
      $nuxt.$emit("dialog", {
        isDialog: false,
      });
    },
    sendForm() {
      this.putCuviEducationBasic(this.curriculumItem);
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
