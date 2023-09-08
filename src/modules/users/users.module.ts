import { PrismaService } from '@infra/database/prisma.service'
import { Module } from '@nestjs/common'
import { UserService } from './services/user.service'
import { UserController } from './services/user.controller'
import { UserRepository } from './repositories/concrete/UserRepository'

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, UserRepository],
})
// eslint-disable-next-line prettier/prettier
export class UserModule { }
