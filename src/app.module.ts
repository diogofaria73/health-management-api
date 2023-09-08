import { envSchema } from '@core/env'
import { PrismaService } from '@infra/database/prisma.service'
import { PatientModule } from '@modules/patients/patient.module'
import { UserModule } from '@modules/users/users.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'

@Module({
  imports: [
    UserModule,
    PatientModule,
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [PrismaService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
