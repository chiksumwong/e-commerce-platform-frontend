export const lowercase = value => {
  if (process.env.VUE_APP_PW_LOWERCASE == "false") {
    return true;
  }
  const match = value.match(/[a-z]/g) || [];
  return match.length >= 1;
};
export const uppercase = value => {
  if (process.env.VUE_APP_PW_UPPERCASE == "false") {
    return true;
  }
  const match = value.match(/[A-Z]/g) || [];
  return match.length >= 1;
};
export const numeric = value => {
  if (process.env.VUE_APP_PW_NUMERIC == "false") {
    return true;
  }
  const match = value.match(/\d/g) || [];
  return match.length >= 1;
};
export const character = value => {
  if (process.env.VUE_APP_PW_CHARACTER == "false") {
    return true;
  }
  const match = value.match(/[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g) || [];
  return match.length >= 1;
};
export const min_length = value => {
  if (value.length == 0) {
    return true;
  }
  return value.length >= parseInt(process.env.VUE_APP_PW_MIN_LENGTH);
};
