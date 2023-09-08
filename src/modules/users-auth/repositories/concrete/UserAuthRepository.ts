import { User } from '@prisma/client'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@infra/database/prisma.service'
import { CreateUserDto } from '@modules/users/dtos/create.user.dto'
import { UpdateUserDto } from '@modules/users/dtos/update.user.dto'
import { EncryptPassword } from 'src/helpers/security/encripty.password'
import { CreateUserAuthDto } from '@modules/users-auth/dtos/create-user-auth.dto'
import { IUserAuthRepository } from '../abstract/IUserAuthRepository'

@Injectable()
export class UserAuthRepository
  implements IUserAuthRepository<CreateUserAuthDto>
{
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prisma: PrismaService) { }

  async findByEmail(data: CreateUserAuthDto): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    })

    return user || null
  }
}
