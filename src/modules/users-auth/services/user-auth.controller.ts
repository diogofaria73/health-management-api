import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ApiTags } from '@nestjs/swagger'
import { PrismaService } from '@infra/database/prisma.service'
import { compare } from 'bcrypt'
import { UserAuthService } from './user-auth.service'
import { CreateUserAuthDto } from '../dtos/create-user-auth.dto'
@ApiTags('Session')
@Controller(`${'/api/'}${process.env.API_VERSION}${'/authenticate'}`)
export class AuthenticateController {
  constructor(
    private userAuthService: UserAuthService,
    private prisma: PrismaService,
    private jwt: JwtService,
  ) { }

  @Post('login')
  async handle(@Body() data: CreateUserAuthDto) {
    const user = await this.userAuthService.create(data)

    if (!user) throw new UnauthorizedException('User credentials do not match')

    const isPasswordValid = await compare(data.password, user.password)

    if (!isPasswordValid)
      throw new UnauthorizedException('User credentials do not match')

    const accessToken = this.jwt.sign({ sub: user.id })

    return {
      access_token: accessToken,
    }
  }
}
