import * as bcrypt from 'bcrypt'

export class EncryptPassword {
  static async keyHash(password: string) {
    return await bcrypt.hash(
      password,
      Number(process.env.PASSWORD_SALT_COMPLEXITY),
    )
  }
}
