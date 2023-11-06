export const validateEmail = (_: any, value: string) => {
  // Regular expression to validate an email address
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!value || emailRegex.test(value)) {
    return Promise.resolve();
  }

  throw new Error('Please enter a valid email address');
};
