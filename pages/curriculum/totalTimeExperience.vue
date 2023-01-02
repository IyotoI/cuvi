<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Button
          icon="chevron-left"
          color="#5FA52D"
          largeIcon
          @action="goBack"
          class="mr-n4"
        />
        <span> Volver </span>
      </v-col>
      <v-col class="pagedssh">
        <h2 class="text-center mb-6">Tiempo total de experiencia</h2>
        <Button
          class="white--text mb-6"
          block
          label="Añadir tiempo total de experiencia"
          color="#5FA52D"
          @action="selectForm(1)"
        />
        <!-- <Form nameForm="totalTimeExperience" /> -->
        <!-- <Button label="Guardar" color="#5FA52D" class="white--text" /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    goBack() {
      $nuxt.$router.push({ name: "curriculum" });
    },
  },
  watch: {
    idFormSelected(val) {
      this.idFormSelected = 0;
      switch (val) {
        case 1:
          $nuxt.$emit("dialog", {
            isDialog: true,
            nameComponent: "FormPageCurriculumTotalTimeExperience",
            titleDialog: "Añadir tiempo total de experiencia",
          });
          break;
        // case 2:
        //   $nuxt.$emit("dialog", {
        //     isDialog: true,
        //     nameComponent: "FormPageCurriculumWorkExperience",
        //     titleDialog: "Registrar contrato anterior",
        //   });
        //   console.log(1);
        //   break;
        // case 2:
        // $nuxt.$emit("dialog", {
        //   isDialog: true,
        //   nameComponent:
        //     "FormPageCurriculumAcademicBackgroundHigherEducation",
        //   titleDialog: "Añadir educación superior",
        // });
        // console.log(2);
        // break;

        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.pagedssh {
  text-align: center;
  height: calc(100vh - 240px);
  overflow: scroll;
  padding: 0px 12% 0px 12%;
}
</style>
