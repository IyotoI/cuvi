<template>
  <div class="page">
    <v-row>
      <!-- Titulo -->
      <v-col cols="12">
        <h1>Tests</h1>
      </v-col>
      <!-- Imagen -->
      <v-col cols="12">
        <v-img
          lazy-src="img/split_testing.svg"
          class="mx-auto"
          max-width="250"
          src="img/split_testing.svg"
        ></v-img>
      </v-col>
      <!-- Botones de los formularios-->
      <v-col cols="12">
        <Button
          label="16 PF"
          block
          class="white--text"
          color="#5FA52D"
          :disabled="isTestAvaible"
          @action="selectForm(1)"
        />
      </v-col>
      <v-col cols="12">
        <Button
          label="Valanti"
          block
          class="white--text"
          color="#5FA52D"
          :disabled="isTestAvaible"
          @action="selectForm(2)"
        />
      </v-col>
      <v-col cols="12">
        <Button
          label="360"
          block
          class="white--text"
          color="#5FA52D"
          :disabled="isTestAvaible"
          @action="selectForm(3)"
        />
      </v-col>
      <v-col cols="12">
        <Button
          label="Perzonalizado"
          block
          class="white--text"
          color="#5FA52D"
          :disabled="isTestAvaible"
          @action="selectForm(4)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { CuviController } from "~/controllers/cuvi.controller";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      idFormSelected: 0,
      isTestAvaible: true,
    };
  },
  //   async fetch() {
  //     const idUser = this.dataUser.user._id;
  //     const dataUser = await this.getCuvi(idUser);
  //     if (dataUser !== null) {
  //       this.isTestAvaible = false;
  //       this.actUpdateValue({
  //         key: "editedCurriculum",
  //         value: dataUser,
  //       });
  //     }
  //     console.log(this.$fire);
  //   },
  methods: {
    ...mapActions("curriculum_store", ["actUpdateValue"]),

    getCuvi: CuviController.get.cuvi,

    selectForm(val) {
      this.idFormSelected = val;
    },
  },
  computed: {
    ...mapGetters("localStorage", ["dataUser"]),
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
