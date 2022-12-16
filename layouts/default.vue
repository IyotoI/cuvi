<template>
  <v-app dark>
    <v-toolbar max-height="100px">
      <!--  -->
    </v-toolbar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Navegacion -->
    <v-toolbar max-height="100px">
      <v-tabs height="100" fixed-tabs v-if="isViewLogin">
        <v-tab v-for="(item, i) in itemsNavigation" :key="i">
          <v-icon large color="green darken-2" v-text="`mdi-${item}`" />
        </v-tab>
      </v-tabs>
    </v-toolbar>
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
