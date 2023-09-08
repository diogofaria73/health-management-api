import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { UserAuthRepository } from '../repositories/concrete/UserAuthRepository'
import { CreateUserAuthDto } from '../dtos/create-user-auth.dto'

@Injectable()
export class UserAuthService {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly userAuthRepository: UserAuthRepository) { }

  async create(data: CreateUserAuthDto): Promise<User | null> {
    const userExists = await this.userAuthRepository.findByEmail(data)
    return userExists || null
  }
}
