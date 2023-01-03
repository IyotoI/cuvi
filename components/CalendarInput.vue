<template>
  <v-menu
    v-model="menu2"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="localModel"
        :label="label"
        prepend-inner-icon="mdi-calendar"
        rounded
        dense
        outlined
        :rules="rules"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="localModel" @input="menu2 = false"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Label",
    },
    model: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      localModel: this.model,
      menu: false,
      modal: false,
      menu2: false,
    };
  },

  watch: {
    model(val) {
      this.localModel = val;
    },
    localModel(val) {
      this.$emit("update:model", val);
    },
  },
};
</script>
