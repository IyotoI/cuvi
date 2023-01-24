<template>
  <v-form v-model="isFormValid" @submit.prevent="sendForm">
    <v-row dense>
      <!-- Datos personales -->
      <v-col cols="12">
        <FormInput
          label="Foto"
          :model.sync="payload.personal_data.photo"
          :rules="rules.photo"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Primer apellido"
          :model.sync="payload.personal_data.first_secondname"
          :rules="rules.first_secondname"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Segundo apellido (o de casada)"
          :model.sync="payload.personal_data.second_secondname"
          :rules="rules.second_secondname"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Nombre"
          :model.sync="payload.personal_data.name"
          :rules="rules.name"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.typeid"
          label="Tipo de documento"
          :model.sync="payload.personal_data.typeid"
          :rules="rules.typeid"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Documento"
          :model.sync="payload.personal_data.id_number"
          :rules="rules.id_number"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.sex"
          label="Sexo"
          :model.sync="payload.personal_data.sex"
          :rules="rules.sex"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.nacionality"
          label="Nacionalidad"
          :model.sync="payload.personal_data.nacionality"
          :rules="rules.nacionality"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.country"
          label="Pais"
          :model.sync="payload.personal_data.country"
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
          :model.sync="payload.personal_data.military_card.type"
          :rules="rules.military_card.type"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Numero"
          :model.sync="payload.personal_data.military_card.number"
          :rules="rules.military_card.number"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="DM"
          :model.sync="payload.personal_data.military_card.dm"
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
          :model.sync="payload.personal_data.date_place_birth.date"
          :rules="rules.date_place_birth_place.date"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.country"
          label="Pais"
          :model.sync="payload.personal_data.date_place_birth.place.country"
          :rules="rules.date_place_birth_place.country"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Departamento"
          :model.sync="payload.personal_data.date_place_birth.place.depto"
          :rules="rules.date_place_birth_place.depto"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Municipio"
          :model.sync="payload.personal_data.date_place_birth.place.municipio"
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
          :model.sync="payload.personal_data.post_address.address"
          :rules="rules.post_address.address"
        />
      </v-col>
      <v-col cols="12">
        <FormSelect
          :items="items.country"
          label="Pais"
          :model.sync="payload.personal_data.post_address.country"
          :rules="rules.post_address.country"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Departamento"
          :model.sync="payload.personal_data.post_address.depto"
          :rules="rules.post_address.depto"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Municipio"
          :model.sync="payload.personal_data.post_address.municipio"
          :rules="rules.post_address.municipio"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Telefono"
          :model.sync="payload.personal_data.post_address.phone"
          :rules="rules.post_address.phone"
        />
      </v-col>
      <v-col cols="12">
        <FormInput
          label="Correo"
          :model.sync="payload.personal_data.post_address.email"
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
import { CuviController } from "~/controllers/cuvi.controller";
import { Regex } from "~/plugins/regex.js";
import { mapGetters } from "vuex";

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
            type: "",
            number: "",
            dm: "", // 3 caracteres
          },
          date_place_birth: {
            date: "",
            place: {
              country: "",
              depto: "",
              municipio: "",
            },
          },
          post_address: {
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
    cleanForm() {
      this.payload = {};
    },
  },
  computed: {
    ...mapGetters("localStorage", ["personalData"]),
  },
  // mounted() {
  //   const object = JSON.parse(JSON.stringify(this.personalData));
  //   this.payload.personal_data = object;
  // },
  watch: {
    "payload.personal_data.post_address.phone"() {
      this.payload.personal_data.post_address.phone = Number(
        this.payload.personal_data.post_address.phone
      );
    },
    "payload.personal_data.id_number"() {
      this.payload.personal_data.id_number = Number(
        this.payload.personal_data.id_number
      );
    },
  },
};
</script>
