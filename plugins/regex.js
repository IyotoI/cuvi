/* 
    Inicio = /^ 
    interno = Regla
    Final = $/
    + = El mas es para que valida uno despues de otro caracter
*/

export const Regex = {
  onlyNumbers: /^[0-9]+$/,
  onlyLettersAndSpaces: /^[a-z A-Z ]+$/,
  onlyEmail: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
};
