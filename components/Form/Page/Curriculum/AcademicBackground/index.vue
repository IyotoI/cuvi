<template>
  <v-row dense>
    <v-col cols="12" class="mb-6">
      <Button
        class="white--text"
        block
        label="Añadir educación básica"
        color="#5FA52D"
        @action="selectForm(1)"
      />
    </v-col>
    <!-- {{ curriculumItemAcademicTrainingHighEducation }} -->
    <v-col cols="12" class="mb-6">
      <Button
        class="white--text"
        block
        label="Añadir educación superior"
        color="#5FA52D"
        @action="selectForm(2)"
      />
    </v-col>
    <v-col cols="12" class="mb-6">
      <Button
        class="white--text"
        block
        label="Añadir idioma"
        color="#5FA52D"
        @action="selectForm(3)"
      />
    </v-col>
  </v-row>
</template>

<script>
import { propertiesGenerator } from "~/plugins/helpers";
import { VModel_Curriculum_interface } from "~/interfaces/curriculum_interface";

export default {
  data() {
    return {
      idFormSelected: 0,
    };
  },
  methods: {
    selectForm(val) {
      this.idFormSelected = val;
    },
  },
  watch: {
    idFormSelected(val) {
      this.idFormSelected = 0;
      switch (val) {
        case 1:
          $nuxt.$emit("dialog", {
            isDialog: true,
            nameComponent: "FormPageCurriculumAcademicBackgroundBasicEducation",
            titleDialog: "Añadir educación básica",
          });
          break;
        case 2:
          $nuxt.$emit("dialog", {
            isDialog: true,
            nameComponent:
              "FormPageCurriculumAcademicBackgroundHigherEducation",
            titleDialog: "Añadir educación superior",
          });
          break;
        case 3:
          $nuxt.$emit("dialog", {
            isDialog: true,
            nameComponent: "FormPageCurriculumAcademicBackgroundLanguage",
            titleDialog: "Añadir idioma",
          });
          break;

        default:
          break;
      }
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
