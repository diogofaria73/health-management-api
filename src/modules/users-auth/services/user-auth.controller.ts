import { Controller, Post } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Session')
@Controller(`${'/api/'}${process.env.API_VERSION}${'/authenticate'}`)
export class AuthenticateController {
  // eslint-disable-next-line prettier/prettier
  constructor(private jwt: JwtService) { }

  @Post('create')
  async handle() {
    const token = this.jwt.sign({ sub: 'admin' })
    return token
  }
}
