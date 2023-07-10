import { Clinic } from '@prisma/client'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@infra/database/prisma.service'
import { CreateClinicDto } from '@modules/clinics/dtos/create.clinic.dto'
import { UpdateClinicDto } from '@modules/clinics/dtos/update.clinic.dto'
import { IClinicRepository } from '../abstract/IClinicRepository'

@Injectable()
export class ClinicRepository implements IClinicRepository<Clinic> {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateClinicDto): Promise<Clinic> {
    const clinic = await this.prisma.clinic.create({ data })
    return clinic
  }

  async update(data: UpdateClinicDto): Promise<Clinic> {
    const clinic = await this.prisma.clinic.update({
      where: {
        id: data.id,
      },
      data,
    })
    return clinic
  }

  async delete(id: string): Promise<Clinic> {
    const clinic = await this.prisma.clinic.delete({
      where: {
        id,
      },
    })

    return clinic
  }

  async findOne(id: string): Promise<Clinic> {
    const clinic = await this.prisma.clinic.findFirst({
      where: {
        id,
      },
    })
    return clinic
  }

  async findAll(): Promise<Clinic[]> {
    const clinics = await this.prisma.clinic.findMany()
    return clinics
  }

  async findEnabledClinics(): Promise<Clinic> {
    const clinics = await this.prisma.clinic.findFirst({
      where: {
        isActive: true,
      },
    })
    return clinics
  }

  async findDisabledClinics(): Promise<Clinic> {
    const patients = await this.prisma.clinic.findFirst({
      where: {
        isActive: false,
      },
    })
    return patients
  }
}
