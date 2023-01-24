<template>
  <v-form v-model="isFormValid" @submit.prevent="sendForm">
    <v-row>
      {{ itemPayload }}
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Empresa o entidad"
          :model.sync="itemPayload.companyEntity"
          :rules="rules.companyEntity"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.typeCompanyEntity"
          label="Tipo"
          :model.sync="itemPayload.typeCompanyEntity"
          :rules="rules.typeCompanyEntity"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.country"
          label="Pais"
          :model.sync="itemPayload.country"
          :rules="rules.country"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.department"
          label="Departamento"
          :model.sync="itemPayload.department"
          :rules="rules.department"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.municipality"
          label="Municipio"
          :model.sync="itemPayload.municipality"
          :rules="rules.municipality"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Correo electronico de la entidad"
          :model.sync="itemPayload.emailEntity"
          :rules="rules.emailEntity"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Telefono"
          :model.sync="itemPayload.phone"
          :rules="rules.phone"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <CalendarInput
          label="Fecha de ingreso"
          :model.sync="itemPayload.dateEntry"
          :rules="rules.dateEntry"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <CalendarInput
          label="Fecha de retiro"
          :model.sync="itemPayload.dateWithdrawal"
          :rules="rules.dateWithdrawal"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Cargo"
          :model.sync="itemPayload.cargo"
          :rules="rules.cargo"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Dependencia"
          :model.sync="itemPayload.dependency"
          :rules="rules.dependency"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Direccion"
          :model.sync="itemPayload.address"
          :rules="rules.address"
        />
      </v-col>

      <v-col cols="12" class="mb-n4 d-flex justify-end mt-3">
        <Button
          @action="closeDialog"
          class="white--text mr-2"
          color="secondary"
          label="Cancelar"
        />
        <Button
          class="white--text"
          color="#5FA52D"
          :disabled="!isFormValid"
          label="Guardar"
          type="submit"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      isFormValid: true,
      itemPayload: {
        companyEntity: null,
        typeCompanyEntity: null,
        country: null,
        department: null,
        municipality: null,
        emailEntity: null,
        phone: null,
        dateEntry: null,
        dateWithdrawal: null,
        cargo: null,
        dependency: null,
        address: null,
      },
      items: {
        typeCompanyEntity: ["privada", "publica"],
        country: ["colombia"],
        department: ["caldas"],
        municipality: ["manizales"],
      },
      rules: {
        companyEntity: [(v) => !!v || "La empresa o entidad es requerida"],
        typeCompanyEntity: [(v) => !!v || "El tipo de empresa es requerido"],
        country: [(v) => !!v || "El pais de la empresa es requerido"],
        department: [
          (v) => !!v || "El departamento de la empresa es requerida",
        ],
        municipality: [(v) => !!v || "El municipio es requerido"],
        emailEntity: [(v) => !!v || "El correo de la empresa es requerido"],
        phone: [(v) => !!v || "El telefono del la empresa es requerido"],
        dateEntry: [(v) => !!v || "La fecha de ingreso es requerida"],
        dateWithdrawal: [(v) => !!v || "La fecha de retiro es requerida"],
        cargo: [(v) => !!v || "El cargo es requerido"],
        dependency: [(v) => !!v || "La dependencia es requerida"],
        address: [(v) => !!v || "La direccion es requerida"],
      },
    };
  },
  methods: {
    closeDialog() {
      $nuxt.$emit("dialog", {
        isDialog: false,
      });
    },
    sendForm() {
      this.cleanForm();
    },
    cleanForm() {
      this.itemPayload = {};
    },
  },
};
</script>

<style></style>
