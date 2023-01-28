export const CuviController = {
  post: {
    cuvi: async (payload) => {
      const dataUser = $nuxt.$store.getters["localStorage/dataUser"];
      $nuxt.$api.setHeader("Authorization", `Bearer ${dataUser.token}`);

      const { data } = await $nuxt.$api.post("cuvi", payload);
      console.log("🚀 ~ file: cuvi.controller.js:5 ~ cuvi: ~ data", data);
      // console.log("🚀 ~ file: cuvi.controller.js:5 ~ cuvi: ~  data", data);
      // return data.data;
    },
  },
  get: {
    cuvi: async (idCuvi) => {
      const dataUser = $nuxt.$store.getters["localStorage/dataUser"];
      $nuxt.$api.setHeader("Authorization", `Bearer ${dataUser.token}`);

      const { data } = await $nuxt.$api.get(`cuvi/${idCuvi}`);
      return data.data;
    },

    // register: async (payload) => {
    //   const { data } = await $nuxt.$api.post("auth/register", payload);
    //   const token = data.data.token;
    //   if (token) {
    //     $nuxt.$router.push({ name: "login" });
    //   }
    // },
  },
  put: {
    // cuvi: {
    //   educationBasic: async (payload) => {
    //     const url = `cuvi/ei/${payload._id}`;
    //     const data = await $nuxt.$api.put(url, payload);
    //     console.log(
    //       "🚀 ~ file: cuvi.controller.js:35 ~ educationBasic: ~ data",
    //       data
    //     );
    //   },
    //   educationHigh: async (payload) => {
    //     const dataUser = $nuxt.$store.getters["localStorage/dataUser"];
    //     $nuxt.$api.setHeader("Authorization", `Bearer ${dataUser.token}`);

    //     const url = `cuvi/es/${payload._id}`;
    //     const data = await $nuxt.$api.put(url, payload);
    //     console.log(
    //       "🚀 ~ file: cuvi.controller.js:35 ~ educationBasic: ~ data",
    //       data
    //     );
    //   },
    //   workExperience
    // educationLenguaje: (payload) => {
    //   const url = `cuvi/ei/${payload}`
    // },
    // },
    cuvi: async (payload) => {
      const url = `cuvi/${payload._id}`;
      const data = await $nuxt.$api.put(url, payload);
      console.log("🚀 ~ file: cuvi.controller.js:59 ~ cuvi: ~ data", data);
      // const dataUser = $nuxt.$store.getters["localStorage/dataUser"];
      // $nuxt.$api.setHeader("Authorization", `Bearer ${dataUser.token}`);
      // const { data } = await $nuxt.$api.get(`cuvi/${idCuvi}`);
      // return data.data;
    },
  },
};
