import bcrypt from "bcryptjs";

export const hashPassword = async (password, salt = 12) => {
  return await bcrypt.hash(password, salt);
};

const validatePassword = async (currentPassword, newPassword) => {
  return bcrypt.compare(currentPassword, newPassword);
};
