<template>
  <v-app dark>
    <v-app-bar app max-height="100px" style="background: #4272a3">
      <!-- -->
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app class="pa-0" min-height="50px" style="background: #4272a3">
      <v-tabs fixed-tabs v-if="isViewLogin">
        <v-tab
          v-for="(item, i) in itemsNavigation"
          :key="i"
          style="background: #4272a3"
        >
          <v-icon large color="white" v-text="`mdi-${item}`" />
        </v-tab>
      </v-tabs>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      itemsNavigation: ["account", "factory", "forum", "exit-to-app"],
    };
  },
  computed: {
    isViewLogin() {
      let valid = true;
      const route = $nuxt.$route.name;
      if (route === "login" || route === "register") {
        valid = false;
      }
      return valid;
    },
  },
};
</script>
