import bcrypt from 'bcryptjs';


const saltRounds = 10;

export function hashPassword(password) {
  try {
    return bcrypt.hashSync(password, saltRounds);
  } catch (error) {
    console.error('Error hashing password:', error);
  }
}

export function verifyPassword(password, hash) {
  try {
    return bcrypt.compareSync(password, hash);
  } catch (error) {
    console.error('Error verifying password:', error);
  }
}
