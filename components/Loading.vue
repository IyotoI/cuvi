<template>
  <v-dialog
    v-model="isLoading"
    fullscreen
    hide-overlay
    transition="dialog-scale-transition"
    persistent
  >
    <v-card
      class="d-flex justify-center align-center flex-column"
      :style="background"
    >
      <flower-spinner
        :animation-duration="1000"
        :size="size"
        dark
        :color="colorSpinner"
      />
      <h2 class="mt-8" :style="styleSpinnerText">Cargando...</h2>
    </v-card>
  </v-dialog>
</template>

<script>
import { FlowerSpinner } from "epic-spinners";

export default {
  data() {
    return {
      isLoading: false,
      size: 80,
      background: "background: none; backdrop-filter: blur(10px)",
      colorSpinner: "#5FA52D",
      styleSpinnerText: "color: #4272A3; font-family: Times, serif",
    };
  },
  components: {
    FlowerSpinner,
  },
  mounted() {
    $nuxt.$on("startLoading", () => {
      this.isLoading = true;
    });
    $nuxt.$on("finishLoading", () => {
      this.isLoading = false;
    });
  },
};
</script>

<style>
.v-dialog {
  box-shadow: none !important;
}
</style>
