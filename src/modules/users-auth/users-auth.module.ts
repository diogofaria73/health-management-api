import { Env } from '@core/env'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthenticateController } from './services/user-auth.controller'

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      useFactory: (configService: ConfigService<Env, true>) => ({
        privateKey: Buffer.from(
          configService.get('JWT_PRIVATE_KEY', { infer: true }).toString(),
          'base64',
        ),
        publicKey: Buffer.from(
          configService.get('JWT_PUBLIC_KEY', { infer: true }).toString(),
          'base64',
        ),
        signOptions: {
          algorithm: 'RS256',
        },
      }),
    }),
  ],
  controllers: [AuthenticateController],
  providers: [],
})
// eslint-disable-next-line prettier/prettier
export class UsersAuthModule { }
