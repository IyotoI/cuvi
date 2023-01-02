<template>
  <div class="page">
    <v-row>
      <!-- Titulo -->
      <v-col cols="12">
        <h1>Curriculum vitae</h1>
      </v-col>
      <!-- Imagen -->
      <v-col cols="12">
        <v-img
          lazy-src="img/hiring.svg"
          class="mx-auto"
          max-width="250"
          src="img/hiring.svg"
        ></v-img>
      </v-col>
      <!-- Botones de los formularios-->
      <v-col cols="12">
        <Button
          label="Datos personales"
          block
          class="white--text"
          color="#5FA52D"
          @action="selectForm(1)"
        />
      </v-col>
      <v-col cols="12">
        <Button
          label="Formación académica"
          block
          class="white--text"
          color="#5FA52D"
          @action="selectForm(2)"
        />
      </v-col>
      <v-col cols="12">
        <Button
          label="Experiencia laboral"
          block
          class="white--text"
          color="#5FA52D"
          @action="selectForm(3)"
        />
      </v-col>
      <v-col cols="12">
        <Button
          label="Tiempo total de experiencia"
          block
          class="white--text"
          color="#5FA52D"
          @action="selectForm(4)"
        />
      </v-col>
      <!-- Boton de imprimir -->
      <v-col cols="12">
        <Icon nameIcon="printer" large /><br />
        <Button label="Descargar curriculum" class="mt-2" />
      </v-col>
    </v-row>
  </div>
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
  },
  watch: {
    idFormSelected(val) {
      switch (val) {
        case 1:
          $nuxt.$router.push({ name: "curriculum-personalInformation" });
          break;
        case 2:
          $nuxt.$router.push({ name: "curriculum-academicBackground" });
          break;
        case 3:
          $nuxt.$router.push({ name: "curriculum-workExperience" });
          break;
        case 4:
          $nuxt.$router.push({ name: "curriculum-totalTimeExperience" });
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.page {
  text-align: center;
  height: calc(100vh - 270px);
  overflow: scroll;
  padding: 0px 12% 0px 12%;
}
</style>
