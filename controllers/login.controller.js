export const LoginController = {
  post: {
    login: async (payload) => {
      $nuxt.$emit("startLoading");
      try {
        const { data } = await $nuxt.$api.post("auth/login", payload);
        const token = data.data.token;
        if (token) {
          $nuxt.$store.dispatch("localStorage/actUpdateValue", {
            key: "dataUser",
            value: data.data,
          });
          $nuxt.$emit("finishLoading");
          $nuxt.$router.push({ name: "curriculum" });
        }
      } catch (error) {
        $nuxt.$emit("finishLoading");
        alert("Correo o contraseña incorrecta");
      }
    },

    register: async (payload) => {
      $nuxt.$emit("startLoading");
      try {
        const res = await $nuxt.$api.post("auth/register", payload);
        const token = res.data.data.token;
        if (token) {
          $nuxt.$emit("finishLoading");
          $nuxt.$router.push({ name: "login" });
        }
      } catch (error) {
        $nuxt.$emit("finishLoading");
        alert(error);
      }
    },
  },
};
