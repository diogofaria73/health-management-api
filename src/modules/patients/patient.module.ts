import { PrismaService } from '@infra/database/prisma.service'
import { Module } from '@nestjs/common'
import { PatientService } from './services/patient.service'
import { PatientController } from './services/patient.controller'
import { PatientRepository } from './repositories/concrete/PatientRepository'

@Module({
  controllers: [PatientController],
  providers: [PrismaService, PatientService, PatientRepository],
})
// eslint-disable-next-line prettier/prettier
export class PatientModule { }
