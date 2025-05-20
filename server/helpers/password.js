import bcrypt from "bcryptjs";

export const hashPassword = async (password, salt = 12) => {
  return await bcrypt.hash(password, salt);
};

const validatePassword = async (currentPassword, newPassword) => {
  return bcrypt.compare(currentPassword, newPassword);
};

export const checkPasswordComplexity = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return hasLowerCase && hasNumber && hasUpperCase;
};

export default validatePassword;
