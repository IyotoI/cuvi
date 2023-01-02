<template>
  <v-icon right v-text="`${nameIcon && `mdi-${nameIcon}`}`" :large="large" />
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false,
    },
    nameIcon: {
      type: String,
      default: "tag",
    },
  },
};
</script>
