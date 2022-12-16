<template>
  <v-btn
    class="text-none"
    :color="color"
    :block="block"
    :disabled="disabled"
    :icon="icon ? true : false"
    :outlined="outlined"
    rounded
    :type="type"
    @click="action"
  >
    <template v-if="!icon">
      {{ label }}
    </template>

    <v-icon v-else :large="largeIcon" dark v-text="`mdi-${icon}`" />
  </v-btn>
</template>

<script>
export default {
  props: {
    // action: {
    //   type: Function,
    //   default: () => null,
    // },
    block: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: "Label",
    },
    largeIcon: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
    },
  },

  methods: {
    action() {
      this.$emit("action");
    },
  },
};
</script>

<style></style>
