<template>
  <v-text-field
    v-model="localModel"
    :autocomplete="autocomplete"
    dense
    :label="label"
    outlined
    :prepend-inner-icon="prependInnerIcon && `mdi-${prependInnerIcon}`"
    rounded
    color="none"
    :rules="rules"
    :type="type === 'number' ? 'text' : type"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    autocomplete: {
      type: String,
      default: "on",
    },
    label: {
      type: String,
      default: "Label",
    },
    model: {
      type: [String, Number],
      default: null,
    },
    prependInnerIcon: {
      type: String,
      default: null,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: "text",
    },
  },
  watch: {
    model(val) {
      this.localModel = val;
    },
    localModel(val) {
      let convertValue = val;
      if (this.type === "number") {
        convertValue = Number(val);
      }
      this.$emit("update:model", convertValue);
    },
  },
  data() {
    return {
      localModel: this.model,
    };
  },
};
</script>
