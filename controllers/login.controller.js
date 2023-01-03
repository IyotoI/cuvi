export const LoginController = {
  post: {
    login: async (payload) => {
      try {
        const { data } = await $nuxt.$api.post("auth/login", payload);
        const token = data.data.token;
        if (token) {
          $nuxt.$store.dispatch("localStorage/actUpdateValue", {
            key: "dataUser",
            value: data.data,
          });
          $nuxt.$router.push({ name: "curriculum" });
        }
      } catch (error) {
        alert("Correo o contraseña incorrecta");
      }
    },

    register: async (payload) => {
      const { data } = await $nuxt.$api.post("auth/register", payload);
      const token = data.data.token;
      if (token) {
        $nuxt.$router.push({ name: "login" });
      }
    },
  },
};
