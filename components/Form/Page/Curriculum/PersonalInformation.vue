<template>
  <v-form v-model="isFormValid" @submit.prevent="sendForm">
    <v-row dense>
      <!-- Datos personales -->
      <v-col cols="12">
        <FormInput
          label="Foto"
          :model.sync="curriculumItemPersonalDataPhoto"
          :rules="rules.photo"
        />
      </v-col>

      <v-col cols="12">
        <FormInput
          label="Primer apellido"
          :model.sync="curriculumItemPersonalDataFirstSecondname"
          :rules="rules.first_secondname"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Segundo apellido (o de casada)"
          :model.sync="curriculumItemPersonalDataSecondSecondname"
          :rules="rules.second_secondname"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Nombre"
          :model.sync="curriculumItemPersonalDataName"
          :rules="rules.name"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.typeid"
          label="Tipo de documento"
          :model.sync="curriculumItemPersonalDataTypeId"
          :rules="rules.typeid"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Documento"
          :model.sync="curriculumItemPersonalDataIdNumber"
          :rules="rules.id_number"
          type="number"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.sex"
          label="Sexo"
          :model.sync="curriculumItemPersonalDataSex"
          :rules="rules.sex"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.nacionality"
          label="Nacionalidad"
          :model.sync="curriculumItemPersonalDataNacionality"
          :rules="rules.nacionality"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.country"
          label="Pais"
          :model.sync="curriculumItemPersonalDataCountry"
          :rules="rules.country"
        />
      </v-col>
      <!-- Libreta militar -->
      <v-col class="text-center mb-6">
        <h2>Libreta militar</h2>
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.militaryCardType"
          label="Tipo"
          :model.sync="curriculumItemPersonalDataMilitaryCardType"
          :rules="rules.military_card.type"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Numero"
          :model.sync="curriculumItemPersonalDataMilitaryCardNumber"
          :rules="rules.military_card.number"
          type="number"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="DM"
          :model.sync="curriculumItemPersonalDataMilitaryCardDM"
          :rules="rules.military_card.dm"
        />
      </v-col>
      <!-- Fecha y lugar de nacimiento -->
      <v-col class="text-center mb-6">
        <h2>Fecha y lugar de nacimiento</h2>
      </v-col>
      <v-col cols="12">
        <CalendarInput
          label="Fecha de nacimiento"
          :model.sync="curriculumItemPersonalDataDatePlaceBirthDate"
          :rules="rules.date_place_birth_place.date"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.country"
          label="Pais"
          :model.sync="curriculumItemPersonalDataDatePlaceBirthPlaceCountry"
          :rules="rules.date_place_birth_place.country"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Departamento"
          :model.sync="curriculumItemPersonalDataDatePlaceBirthPlaceDepto"
          :rules="rules.date_place_birth_place.depto"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Municipio"
          :model.sync="curriculumItemPersonalDataDatePlaceBirthPlaceMunicipio"
          :rules="rules.date_place_birth_place.municipio"
        />
      </v-col>
      <!-- Dirección de correspondecia -->
      <v-col class="text-center mb-6">
        <h2>Dirección de correspondecia</h2>
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Dirección"
          :model.sync="curriculumItemPersonalDataPostAddressAddress"
          :rules="rules.post_address.address"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.country"
          label="Pais"
          :model.sync="curriculumItemPersonalDataPostAddressCountry"
          :rules="rules.post_address.country"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Departamento"
          :model.sync="curriculumItemPersonalDataPostAddressDepto"
          :rules="rules.post_address.depto"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Municipio"
          :model.sync="curriculumItemPersonalDataPostAddressMunicipio"
          :rules="rules.post_address.municipio"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Telefono"
          :model.sync="curriculumItemPersonalDataPostAddressPhone"
          :rules="rules.post_address.phone"
          type="number"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Correo"
          :model.sync="curriculumItemPersonalDataPostAddressEmail"
          :rules="rules.post_address.email"
        />
      </v-col>

      <v-col cols="12" class="d-flex justify-center">
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
import { Regex } from "~/plugins/regex.js";
import { CuviController } from "~/controllers/cuvi.controller";
import { propertiesGenerator } from "~/plugins/helpers";
import { VModel_Curriculum_interface } from "~/interfaces/curriculum_interface";

export default {
  data() {
    return {
      isFormValid: true,
      dateOfBirth: "",
      items: {
        typeid: ["cc", "ce", "pas"],
        sex: ["m", "f"],
        militaryCardType: ["primera", "segunda"],
        country: ["colombia"],
        nacionality: ["col", "extranjero"],
      },
      rules: {
        photo: [(v) => !!v || "La foto es requerida"],
        first_secondname: [
          (v) => !!v || "El primer apellido es requerido",
          (v) => Regex.onlyLettersAndSpaces.test(v) || "Solo se aceptan letras",
        ],
        second_secondname: [
          (v) => !!v || "El segundo apellido es requerido",
          (v) => Regex.onlyLettersAndSpaces.test(v) || "Solo se aceptan letras",
        ],
        name: [
          (v) => !!v || "El nombre es requerido",
          (v) => Regex.onlyLettersAndSpaces.test(v) || "Solo se aceptan letras",
        ],
        typeid: [(v) => !!v || "El tipo de documento es requerido"],
        id_number: [
          (v) => !!v || "EL numero de documento es requerido",
          (v) => Regex.onlyNumbers.test(v) || "Solo se aceptan números",
        ],
        sex: [(v) => !!v || "El sexo es requerido"],
        nacionality: [(v) => !!v || "La nacionalidad es requerida"],
        country: [(v) => !!v || "El pais es requerido"],
        military_card: {
          type: [(v) => !!v || "El tipo de libreta es requerido"],
          number: [
            (v) => !!v || "El numero es requerido",
            (v) => Regex.onlyNumbers.test(v) || "Solo se aceptan números",
          ],
          dm: [
            (v) => !!v || "El dm es requerido",
            (v) =>
              Regex.onlyLettersAndSpaces.test(v) || "Solo se aceptan letras",
          ],
        },
        date_place_birth_place: {
          date: [(v) => !!v || "La fecha de nacimiento es requerida"],
          country: [(v) => !!v || "El pais es requerido"],
          depto: [
            (v) => !!v || "El departamento es requerido",
            (v) =>
              Regex.onlyLettersAndSpaces.test(v) || "Solo se aceptan letras",
          ],
          municipio: [
            (v) => !!v || "El municipio es requerido",
            (v) =>
              Regex.onlyLettersAndSpaces.test(v) || "Solo se aceptan letras",
          ],
        },
        post_address: {
          address: [
            (v) => !!v || "La direccion es requerida",
            (v) =>
              Regex.onlyLettersAndSpaces.test(v) || "Solo se aceptan letras",
          ],
          country: [(v) => !!v || "El pais es requerido"],
          depto: [
            (v) => !!v || "El departamento es requerido",
            (v) =>
              Regex.onlyLettersAndSpaces.test(v) || "Solo se aceptan letras",
          ],
          municipio: [
            (v) => !!v || "El municipio es requerido",
            (v) =>
              Regex.onlyLettersAndSpaces.test(v) || "Solo se aceptan letras",
          ],
          phone: [
            (v) => !!v || "El telefono es requerido",
            (v) => Regex.onlyNumbers.test(v) || "Solo se aceptan números",
          ],
          email: [
            (v) => !!v || "El correo es requerido",
            (v) => Regex.onlyEmail.test(v) || "El correo es invalido",
          ],
        },
      },
    };
  },
  methods: {
    postCuvi: CuviController.post.cuvi,

    goBack() {
      $nuxt.$router.push({ name: "curriculum" });
    },

    sendForm() {
      this.postCuvi(this.curriculumItem);
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
