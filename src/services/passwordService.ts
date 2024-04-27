export const generatePassword = (size: number) => {
  let password = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$(){}[]*&!0123456789";

  for (let index = 1; index <= size; index++) {
    let char = Math.floor(Math.random() * str.length + 1);

    password += str.charAt(char);
  }

  return password;
};
