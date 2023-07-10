import { PrismaService } from '@infra/database/prisma.service'
import { Module } from '@nestjs/common'
import { ClinicService } from './services/clinic.service'
import { ClinicController } from './services/clinic.controller'
import { ClinicRepository } from './repositories/concrete/ClinicRepository'

@Module({
  controllers: [ClinicController],
  providers: [PrismaService, ClinicService, ClinicRepository],
})
export class ClinicModule { }
