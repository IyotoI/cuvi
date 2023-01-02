<template>
  <v-app>
    <v-main>
      <div class="grid">
        <div class="superior-section secondary">
          <!--  -->
        </div>
        <div>
          <Nuxt />
        </div>
        <div class="bottom-section">
          <v-tabs hide-slider="false" grow>
            <template v-if="isViewLogin">
              <v-tab
                v-for="(item, i) in itemsNavigation"
                :key="i"
                :to="`/${item.route}`"
              >
                <v-icon large color="white" v-text="`mdi-${item.icon}`" />
              </v-tab>
            </template>
          </v-tabs>
        </div>
      </div>
    </v-main>
    <Dialog />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      itemsNavigation: ["account", "factory", "forum", "exit-to-app"],
      itemsNavigation: [
        // { icon: "account", route: "a" },
        // { icon: "factory", route: "b" },
        // { icon: "forum", route: "c" },
        { icon: "exit-to-app", route: "login" },
      ],
      group: null,
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

<style>
.grid {
  display: grid;
  grid-template-rows: auto calc(100vh - 186px) auto;
  height: 100vh;
}
.superior-section {
  height: calc(88px - 10px);
}
.bottom-section .v-tabs .v-tabs-bar .v-slide-group__wrapper {
  background: #4272a3 !important;
  height: calc(88px - 10px);
}
</style>
