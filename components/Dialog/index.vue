<template>
  <v-dialog v-model="dialog" max-width="400">
    <v-card rounded="xl">
      <v-card-title
        class="text-h5 d-flex justify-center text-center"
        v-text="titleDialog"
      />

      <v-card-text class="py-10 pageda">
        <component :is="nameComponent"></component>
      </v-card-text>

      <!-- <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      // keyDialog: 0,
      nameComponent: "",
      dialog: false,
      titleDialog: "",
    };
  },

  created() {
    $nuxt.$on("dialog", (val) => {
      this.dialog = val.isDialog;
      this.nameComponent = val.nameComponent;
      this.titleDialog = val.titleDialog;
    });
  },

  // watch: {
  //   dialog(val) {
  //     if (val) {
  //       this.keyDialog = 1;
  //     } else {
  //       this.keyDialog = 0;
  //     }
  //   },
  // },
};
</script>

<style>
.pageda {
  text-align: center;
  height: auto;
  overflow: scroll;
  padding: 0px 12% 0px 12%;
}
</style>
