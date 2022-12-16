<template>
  <v-select
    v-model="localModel"
    dense
    :items="items"
    :item-text="itemText"
    :item-value="itemValue"
    :label="label"
    outlined
    color="none"
    :prepend-inner-icon="prependInnerIcon && `mdi-${prependInnerIcon}`"
    rounded
    :rules="rules"
  ></v-select>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    itemText: {
      type: String,
      default: "",
    },
    itemValue: {
      type: String,
      default: "",
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
  },
  watch: {
    model(val) {
      this.localModel = val;
    },
    localModel(val) {
      this.$emit("update:model", val);
    },
  },
  data() {
    return {
      localModel: this.model,
    };
  },
};
</script>
