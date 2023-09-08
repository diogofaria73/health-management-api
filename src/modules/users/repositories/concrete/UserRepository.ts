import { User } from '@prisma/client'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@infra/database/prisma.service'
import { CreateUserDto } from '@modules/users/dtos/create.user.dto'
import { UpdateUserDto } from '@modules/users/dtos/update.user.dto'
import { EncryptPassword } from 'src/helpers/security/encripty.password'
import { IUserRepository } from '../abstract/IUserRepository'

@Injectable()
export class UserRepository implements IUserRepository<User> {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateUserDto): Promise<User | null> {
    if (data) {
      data.password = await EncryptPassword.keyHash(data.password)
    }

    const user = await this.prisma.user.create({ data })
    return user || null
  }

  async update(data: UpdateUserDto): Promise<User | null> {
    const userUpdated = await this.prisma.user.update({
      where: {
        id: data.id,
      },
      data,
    })
    return userUpdated || null
  }

  async delete(id: string): Promise<User | null> {
    const deletedUser = await this.prisma.user.delete({ where: { id } })

    return deletedUser || null
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({ where: { id } })

    return user || null
  }

  async findAll(): Promise<User[] | null> {
    const users = await this.prisma.user.findMany({})
    return users || null
  }

  async findEnabledUsers(): Promise<User[] | null> {
    const enabledUsers = await this.prisma.user.findMany({
      where: { isActive: true },
    })

    return enabledUsers || null
  }

  async findDisabledUsers(): Promise<User[] | null> {
    const enabledUsers = await this.prisma.user.findMany({
      where: { isActive: false },
    })

    return enabledUsers || null
  }
}
