import { Injectable } from '@nestjs/common'
import { Clinic, Patient } from '@prisma/client'
import { ClinicRepository } from '../repositories/concrete/ClinicRepository'
import { CreateClinicDto } from '../dtos/create.clinic.dto'
import { UpdateClinicDto } from '../dtos/update.clinic.dto'

@Injectable()
export class ClinicService {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly clinicRepository: ClinicRepository) { }

  async create(data: CreateClinicDto): Promise<Clinic> {
    const clinic = await this.clinicRepository.create(data)
    return clinic
  }

  async update(data: UpdateClinicDto): Promise<Clinic> {
    const clinic = await this.clinicRepository.update(data)
    return clinic
  }

  async delete(id: string): Promise<Clinic> {
    const clinic = await this.clinicRepository.delete(id)
    return clinic
  }

  async findOne(id: string): Promise<Clinic> {
    const clinic = await this.clinicRepository.findOne(id)
    return clinic
  }

  async findAll(): Promise<Clinic[]> {
    const clinics = await this.clinicRepository.findAll()
    return clinics
  }
}
