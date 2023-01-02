<template>
  <component :is="selectedForm"></component>
</template>

<script>
export default {
  props: {
    nameForm: "",
  },
  computed: {
    selectedForm() {
      let formDisplay = "";
      switch (this.nameForm) {
        case "login":
          formDisplay = "FormPageLogin";
          break;

        case "register":
          formDisplay = "FormPageRegister";
          break;

        case "personalInformation":
          formDisplay = "FormPageCurriculumPersonalInformation";
          break;

        case "academicBackground":
          formDisplay = "FormPageCurriculumAcademicBackground";
          break;

        case "workExperience":
          formDisplay = "FormPageCurriculumWorkExperience";
          break;

        case "totalTimeExperience":
          formDisplay = "FormPageCurriculumTotalTimeExperience";
          break;

        default:
          formDisplay = "";
          break;
      }
      return formDisplay;
    },
  },
};
</script>
