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

  async create(data: CreatePatientDto): Promise<Patient> {
    const patient = await this.prisma.patient.create({ data })
    return patient
  }

  async update(data: UpdatePatientDto): Promise<Patient> {
    const patient = await this.prisma.patient.update({
      where: {
        id: data.id,
      },
      data,
    })
    return patient
  }

  async delete(id: string): Promise<Patient> {
    const patient = await this.prisma.patient.delete({
      where: {
        id,
      },
    })

    return patient
  }

  async findOne(id: string): Promise<Patient> {
    const patient = await this.prisma.patient.findFirst({
      where: {
        id,
      },
      include: {
        clinic: {
          select: {
            name: true,
          },
        },
      },
    })
    return patient
  }

  async findAll(): Promise<Patient[]> {
    const patients = await this.prisma.patient.findMany({
      include: {
        clinic: {
          select: {
            name: true,
          },
        },
      },
    })
    return patients
  }

  async findEnabledPatients(): Promise<Patient> {
    const patients = await this.prisma.patient.findFirst({
      where: {
        isActive: true,
      },
      include: {
        clinic: {
          select: {
            name: true,
          },
        },
      },
    })
    return patients
  }

  async findDisabledPatients(): Promise<Patient> {
    const patients = await this.prisma.patient.findFirst({
      where: {
        isActive: false,
      },
    })
    return patients
  }
}
