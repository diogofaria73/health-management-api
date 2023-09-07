import { Injectable } from '@nestjs/common'
import { Patient } from '@prisma/client'
import { PatientRepository } from '../repositories/concrete/PatientRepository'
import { CreatePatientDto } from '../dtos/create.patient.dto'
import { UpdatePatientDto } from '../dtos/update.patient.dto'

@Injectable()
export class PatientService {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly patientRepository: PatientRepository) { }

  async create(data: CreatePatientDto): Promise<Patient | null> {
    const patient = await this.patientRepository.create(data)
    return patient || null
  }

  async update(data: UpdatePatientDto): Promise<Patient | null> {
    const patient = await this.patientRepository.update(data)
    return patient || null
  }

  async delete(id: string): Promise<Patient | null> {
    const patient = await this.patientRepository.delete(id)
    return patient || null
  }

  async findOne(id: string): Promise<Patient | null> {
    const patient = await this.patientRepository.findOne(id)
    return patient || null
  }

  async findAll(): Promise<Patient[] | null> {
    const patients = await this.patientRepository.findAll()
    return patients || null
  }
}
