<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th
            class="text-left"
            v-for="(item, i) in headers"
            :key="i"
            v-text="item.text"
          ></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <td>{{ item[headers[i].value] }}</td>
          <td>{{ item[headers[i + 1].value] }}</td>
          <td>{{ item[headers[i + 2].value] }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Educacion basica",
          value: "basicEducation",
        },
        {
          text: "Titulo obtenido",
          value: "titleObtained",
        },
        {
          text: "Fecha de grado",
          value: "dateDegree",
        },
      ],
      items: [
        {
          basicEducation: "primaria",
          titleObtained: "bachiller",
          dateDegree: "2023-01-04",
        },
      ],
    };
  },
};
</script>
