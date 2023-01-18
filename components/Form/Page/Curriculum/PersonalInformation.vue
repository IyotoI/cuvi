<template>
  <v-form v-model="isFormValid" @submit.prevent="sendForm">
    <v-row dense>
      <!-- Datos personales -->
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.photo"
          :rules="rules.photo"
          label="Foto"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.first_secondname"
          :rules="rules.first_secondname"
          label="Primer apellido"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.second_secondname"
          :rules="rules.second_secondname"
          label="Segundo apellido (o de casada)"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.name"
          :rules="rules.name"
          label="Nombre"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :model.sync="payload.personal_data.typeid"
          :items="items.typeid"
          :rules="rules.typeid"
          label="Tipo de documento"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.id_number"
          :rules="rules.id_number"
          label="Documento"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :model.sync="payload.personal_data.sex"
          :rules="rules.sex"
          label="Sexo"
          :items="items.sex"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :model.sync="payload.personal_data.nacionality"
          :items="items.nacionality"
          :rules="rules.nacionality"
          label="Nacionalidad"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :model.sync="payload.personal_data.country"
          :items="items.country"
          :rules="rules.country"
          label="Pais"
        />
      </v-col>
      <!-- Libreta militar -->
      <v-col class="text-center mb-6">
        <h2>Libreta militar</h2>
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.militaryCardType"
          :model.sync="payload.personal_data.military_card.tipo"
          :rules="rules.military_card.tipo"
          label="Tipo"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.military_card.number"
          :rules="rules.military_card.number"
          label="Numero"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.military_card.dm"
          :rules="rules.military_card.dm"
          label="DM"
        />
      </v-col>
      <!-- Fecha y lugar de nacimiento -->
      <v-col class="text-center mb-6">
        <h2>Fecha y lugar de nacimiento</h2>
      </v-col>
      <v-col cols="12">
        <CalendarInput
          label="Fecha de nacimiento"
          :model.sync="dateOfBirth"
          :rules="rules.date_place_birth_place.date"
        />
        <!-- <FormInput
          :model.sync="dateOfBirth"
          :rules="rules.date_place_birth_place.date"
          label="Fecha de nacimiento"
        /> -->
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.country"
          :model.sync="payload.personal_data.date_place_birth.place.country"
          :rules="rules.date_place_birth_place.country"
          label="Pais"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.date_place_birth.place.depto"
          :rules="rules.date_place_birth_place.depto"
          label="Departamento"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.date_place_birth.place.municipio"
          :rules="rules.date_place_birth_place.municipio"
          label="Municipio"
        />
      </v-col>
      <!-- Dirección de correspondecia -->
      <v-col class="text-center mb-6">
        <h2>Dirección de correspondecia</h2>
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.correspondence_address.address"
          :rules="rules.correspondence_address.address"
          label="Dirección"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.country"
          :model.sync="payload.personal_data.correspondence_address.country"
          :rules="rules.correspondence_address.country"
          label="Pais"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.correspondence_address.depto"
          :rules="rules.correspondence_address.depto"
          label="Departamento"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.correspondence_address.municipio"
          :rules="rules.correspondence_address.municipio"
          label="Municipio"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.correspondence_address.phone"
          :rules="rules.correspondence_address.phone"
          label="Telefono"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          :model.sync="payload.personal_data.correspondence_address.email"
          :rules="rules.correspondence_address.email"
          label="Correo"
        />
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <Button
          :disabled="!isFormValid"
          class="white--text"
          type="submit"
          label="Guardar"
          color="#5FA52D"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { CuviController } from "~/controllers/cuvi.controller";
import { Regex } from "~/plugins/regex.js";

export default {
  data() {
    return {
      dateOfBirth: "",
      isFormValid: true,
      items: {
        typeid: ["cc", "ce", "pas"],
        sex: ["m", "f"],
        militaryCardType: ["primera", "segunda"],
        country: ["Colombia"],
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
          tipo: [(v) => !!v || "El tipo de libreta es requerido"],
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
        correspondence_address: {
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
      payload: {
        personal_data: {
          photo: "",
          first_secondname: "",
          second_secondname: "",
          name: "",
          typeid: "",
          id_number: "",
          sex: "",
          nacionality: "",
          country: "",
          military_card: {
            tipo: "",
            number: "",
            dm: "",
          },
          date_place_birth: {
            date: {
              day: "",
              month: "",
              year: "",
            },
            place: {
              country: "",
              depto: "",
              municipio: "",
            },
          },
          correspondence_address: {
            address: "",
            country: "",
            depto: "",
            municipio: "",
            phone: "",
            email: "",
          },
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
      this.postCuvi(this.payload);
    },
  },
  watch: {
    dateOfBirth(val) {
      const obj = {
        day: val.split("-")[2],
        month: val.split("-")[1],
        year: val.split("-")[0],
      };

      this.payload.personal_data.date_place_birth.date = obj;
    },
  },
};
</script>
