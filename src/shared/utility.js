export const updateObject = (oldObject, updatedProperties) => {
  return { ...oldObject, ...updatedProperties };
};

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = isValid && value.trim() !== "";
  }

  if (rules.minLength) {
    isValid = isValid && value.trim().length >= rules.minLength;
  }

  if (rules.maxLength) {
    isValid = isValid && value.trim().length <= rules.minLength;
  }

  if (rules.isEmail) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    isValid = isValid && pattern.test(value);
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = isValid && pattern.test(value);
  }

  return isValid;
};
