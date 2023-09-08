import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { UserRepository } from '../repositories/concrete/UserRepository'
import { CreateUserDto } from '../dtos/create.user.dto'
import { UpdateUserDto } from '../dtos/update.user.dto'

@Injectable()
export class UserService {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly userRepository: UserRepository) { }

  async create(data: CreateUserDto): Promise<User | null> {
    const user = await this.userRepository.create(data)
    return user || null
  }

  async update(data: UpdateUserDto): Promise<User | null> {
    const user = await this.userRepository.update(data)
    return user || null
  }

  async delete(id: string): Promise<User | null> {
    const user = await this.userRepository.delete(id)
    return user || null
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne(id)
    return user || null
  }

  async findAll(): Promise<User[] | null> {
    const users = await this.userRepository.findAll()
    return users || null
  }
}
