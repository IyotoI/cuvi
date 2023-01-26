export const propertiesGenerator = (props = [], { path, mut } = {}) => {
  return props.reduce((obj, prop) => {
    obj[prop.property] = {
      get() {
        /* 5 keys */
        if (
          prop.oneKey &&
          prop.twoKey &&
          prop.threeKey &&
          prop.fourKey &&
          prop.fiveKey
        ) {
          const val =
            $nuxt.$store.state[path][prop.oneKey][prop.twoKey][prop.threeKey][
              prop.fourKey
            ][prop.fiveKey] || prop.defaultValue;
          if (prop.type === "String") {
            return String(val);
          }
          if (prop.type === "Number" && !Number.isNaN(Number(val))) {
            return Number(val);
          }
          return val;
        }
        /* 4 keys */
        if (prop.oneKey && prop.twoKey && prop.threeKey && prop.fourKey) {
          const val =
            $nuxt.$store.state[path][prop.oneKey][prop.twoKey][prop.threeKey][
              prop.fourKey
            ] || prop.defaultValue;
          if (prop.type === "String") {
            return String(val);
          }
          if (prop.type === "Number" && !Number.isNaN(Number(val))) {
            return Number(val);
          }
          return val;
        }
        /* 3 keys */
        if (prop.oneKey && prop.twoKey && prop.threeKey) {
          const val =
            $nuxt.$store.state[path][prop.oneKey][prop.twoKey][prop.threeKey] ||
            prop.defaultValue;
          if (prop.type === "String") {
            return String(val);
          }
          if (prop.type === "Number" && !Number.isNaN(Number(val))) {
            return Number(val);
          }
          return val;
        }
        /* 2 keys */
        if (prop.oneKey && prop.twoKey) {
          const val =
            $nuxt.$store.state[path][prop.oneKey][prop.twoKey] ||
            prop.defaultValue;
          if (prop.type === "String") {
            return String(val);
          }
          if (prop.type === "Number" && !Number.isNaN(Number(val))) {
            return Number(val);
          }
          return val;
        }
        /* 1 key */
        if (prop.oneKey) {
          const val =
            $nuxt.$store.state[path][prop.oneKey] || prop.defaultValue;
          if (prop.type === "String") {
            return String(val);
          }
          if (prop.type === "Number" && !Number.isNaN(Number(val))) {
            return Number(val);
          }
          return val;
        }
      },
      set(value) {
        $nuxt.$store.commit(mut, {
          oneKey: prop.oneKey,
          twoKey: prop.twoKey,
          threeKey: prop.threeKey,
          fourKey: prop.fourKey,
          fiveKey: prop.fiveKey,
          type: prop.type,
          upper: prop.upper,
          lower: prop.lower,
          value,
        });
      },
    };
    return obj;
  }, {});
};

export const setProperty = (state, data) => {
  /**
  |--------------------------------------------------
  | Obtiene las keys que se le mandan
  |--------------------------------------------------
  */
  const oneKey = data.oneKey;
  const twoKey = data.twoKey;
  const threeKey = data.threeKey;
  const fourKey = data.fourKey;
  const fiveKey = data.fiveKey;
  /**
  |--------------------------------------------------
  | Que tipo es el valor
  |--------------------------------------------------
  */
  const type = data.type;
  const upper = data.upper;
  const lower = data.lower;
  let customValue = data.value;

  /**
  |--------------------------------------------------
  | Convierte el valor en String, minuscula y mayuscula
  |--------------------------------------------------
  */
  if (type === "String") {
    customValue = String(customValue);
  }
  if (upper) {
    customValue = customValue.toUpperCase();
  }
  if (lower) {
    customValue = customValue.toLowerCase();
  }

  /**
  |--------------------------------------------------
  | Validacion de las keys
  |--------------------------------------------------
  */
  if (oneKey && twoKey && threeKey && fourKey && fiveKey) {
    state[oneKey][twoKey][threeKey][fourKey][fiveKey] = customValue;
    return;
  }
  if (oneKey && twoKey && threeKey && fourKey) {
    state[oneKey][twoKey][threeKey][fourKey] = customValue;
    return;
  }
  if (oneKey && twoKey && threeKey) {
    state[oneKey][twoKey][threeKey] = customValue;
    return;
  }
  if (oneKey && twoKey) {
    state[oneKey][twoKey] = customValue;
    return;
  }
  if (oneKey) {
    state[oneKey] = customValue;
  }
};
