<template>
  <v-form v-model="isFormValid" @submit.prevent="sendForm">
    <v-row>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Empresa o entidad"
          :model.sync="itemPayload.facility_name"
          :rules="rules.facility_name"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormSelect
          :items="items.public_or_private"
          label="Tipo"
          :model.sync="itemPayload.public_or_private"
          :rules="rules.public_or_private"
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
          :items="items.municipio"
          label="Municipio"
          :model.sync="itemPayload.municipio"
          :rules="rules.municipio"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Correo electronico de la entidad"
          :model.sync="itemPayload.email_facility"
          :rules="rules.email_facility"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Telefono"
          :model.sync="itemPayload.phone_facility"
          :rules="rules.phone_facility"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <CalendarInput
          label="Fecha de ingreso"
          :model.sync="itemPayload.date_in"
          :rules="rules.date_in"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <CalendarInput
          label="Fecha de retiro"
          :model.sync="itemPayload.date_out"
          :rules="rules.date_out"
        />
      </v-col>
      <v-col cols="12" class="mb-n4">
        <FormInput
          label="Cargo"
          :model.sync="itemPayload.job_name"
          :rules="rules.job_name"
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
          :model.sync="itemPayload.address_facility"
          :rules="rules.address_facility"
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
import { CuviController } from "~/controllers/cuvi.controller";
import { propertiesGenerator } from "~/plugins/helpers";
import { VModel_Curriculum_interface } from "~/interfaces/curriculum_interface";

export default {
  data() {
    return {
      isFormValid: true,
      itemPayload: {
        facility_name: null,
        public_or_private: null,
        country: null,
        department: null,
        municipio: null,
        email_facility: null,
        phone_facility: null,
        date_in: null,
        date_out: null,
        job_name: null,
        dependency: null,
        address_facility: null,
      },
      items: {
        public_or_private: ["privada", "publica"],
        country: ["colombia"],
        department: ["caldas"],
        municipio: ["manizales"],
      },
      rules: {
        facility_name: [(v) => !!v || "La empresa o entidad es requerida"],
        public_or_private: [(v) => !!v || "El tipo de empresa es requerido"],
        country: [(v) => !!v || "El pais de la empresa es requerido"],
        department: [
          (v) => !!v || "El departamento de la empresa es requerida",
        ],
        municipio: [(v) => !!v || "El municipio es requerido"],
        email_facility: [(v) => !!v || "El correo de la empresa es requerido"],
        phone_facility: [
          (v) => !!v || "El telefono del la empresa es requerido",
        ],
        date_in: [(v) => !!v || "La fecha de ingreso es requerida"],
        date_out: [(v) => !!v || "La fecha de retiro es requerida"],
        job_name: [(v) => !!v || "El cargo es requerido"],
        dependency: [(v) => !!v || "La dependencia es requerida"],
        address_facility: [(v) => !!v || "La direccion es requerida"],
      },
    };
  },
  methods: {
    putCuvi: CuviController.put.cuvi,

    closeDialog() {
      $nuxt.$emit("dialog", {
        isDialog: false,
      });
    },
    sendForm() {
      this.curriculumItemAcademicWorkExperience = [
        ...this.curriculumItemAcademicWorkExperience,
        this.itemPayload,
      ];
      this.putCuvi(this.curriculumItem);
      this.closeDialog();
    },
  },
  computed: {
    ...propertiesGenerator([...VModel_Curriculum_interface], {
      path: "curriculum_store",
      mut: "curriculum_store/setProperty",
    }),
  },
};
</script>

<style></style>
