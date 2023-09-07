import { Patient } from '@prisma/client'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@infra/database/prisma.service'
import { CreatePatientDto } from '@modules/patients/dtos/create.patient.dto'
import { UpdatePatientDto } from '@modules/patients/dtos/update.patient.dto'
import { IPatientRepository } from '../abstract/IPatientRepository'

@Injectable()
export class PatientRepository implements IPatientRepository<Patient> {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreatePatientDto): Promise<Patient | null> {
    const patient = await this.prisma.patient.create({ data })
    return patient || null
  }

  async update(data: UpdatePatientDto): Promise<Patient | null> {
    const patient = await this.prisma.patient.update({
      where: {
        id: data.id,
      },
      data,
    })
    return patient || null
  }

  async delete(id: string): Promise<Patient | null> {
    const patient = await this.prisma.patient.delete({
      where: {
        id,
      },
    })

    return patient || null
  }

  async findOne(id: string): Promise<Patient | null> {
    const patient = await this.prisma.patient.findFirst({
      where: {
        id,
      },
    })
    return patient || null
  }

  async findAll(): Promise<Patient[] | null> {
    const patients = await this.prisma.patient.findMany({})
    return patients || null
  }

  async findEnabledPatients(): Promise<Patient | null> {
    const patients = await this.prisma.patient.findFirst({
      where: {
        isActive: true,
      },
    })
    return patients || null
  }

  async findDisabledPatients(): Promise<Patient | null> {
    const patients = await this.prisma.patient.findFirst({
      where: {
        isActive: false,
      },
    })
    return patients || null
  }
}
