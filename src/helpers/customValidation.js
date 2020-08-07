export const emailValidation = function (email) {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValid = emailFormat.test(email);
  return isValid;
};

export const passwordValidation = function (password) {
  const passwordFormat = /^.{6,36}$/;
  const isValid = passwordFormat.test(password);
  return isValid;
};

export const usernameValidation = function (username) {
  const usernameFormat = /^[a-zA-Z0-9_-]{4,12}$/;
  const isValid = usernameFormat.test(username);
  return isValid;
};
