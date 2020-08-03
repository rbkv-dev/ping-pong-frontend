export const emailValidation = function (email) {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValid = emailFormat.test(email);
  return isValid;
};

export const passwordValidation = function (email) {
  const passwordFormat = /.{6,}/;
  const isValid = passwordFormat.test(email);
  return isValid;
};
