<template>
  <div class="page">
    <v-row>
      <v-col cols="12" class="mb-2">
        <v-img
          lazy-src="img/hiring.svg"
          class="mx-auto"
          max-width="140"
          src="img/logo_business.svg"
        ></v-img>
      </v-col>
      <v-col cols="12">
        <Form nameForm="login" />
      </v-col>
      <v-col class="text-center mt-4" cols="12">
        Si tu no tienes una cuenta<br />
        <NuxtLink to="/register">Registrate</NuxtLink>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  align-items: center;
  height: calc(100vh - 200px);
  padding: 0px 12% 0px 12%;
}
</style>
