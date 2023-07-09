import { Injectable } from '@nestjs/common'
import { Patient } from '@prisma/client'
import { PatientRepository } from '../repositories/concrete/PatientRepository'
import { CreatePatientDto } from '../dtos/create.patient.dto'
import { UpdatePatientDto } from '../dtos/update.patient.dto'

@Injectable()
export class PatientService {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly patientRepository: PatientRepository) { }

  async create(data: CreatePatientDto): Promise<Patient> {
    const category = await this.patientRepository.create(data)
    return category
  }

  async update(data: UpdatePatientDto): Promise<Patient> {
    const category = await this.patientRepository.update(data)
    return category
  }

  async delete(id: string): Promise<Patient> {
    const category = await this.patientRepository.delete(id)
    return category
  }

  async findOne(id: string): Promise<Patient> {
    const category = await this.patientRepository.findOne(id)
    return category
  }

  async findAll(): Promise<Patient[]> {
    const categories = await this.patientRepository.findAll()
    return categories
  }
}
