const validateEmail = (email: string) => {
  let isEmailValid;
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ? (isEmailValid = true)
    : (isEmailValid = false);

  return isEmailValid;
};

export default validateEmail;
