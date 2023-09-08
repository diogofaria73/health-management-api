import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common'
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger'
import { PatientService } from './patient.service'
import { CreatePatientDto } from '../dtos/create.patient.dto'
import { UpdatePatientDto } from '../dtos/update.patient.dto'

@ApiBasicAuth()
@ApiTags('Patients')
@Controller(`${'/api/'}${process.env.API_VERSION}${'/patient'}`)
export class PatientController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly patientService: PatientService) { }

  @Post('create')
  async create(@Body() data: CreatePatientDto) {
    const result = await this.patientService.create(data)
    if (result != null) {
      return result
    } else {
      throw new ConflictException('Patient already exists')
    }
  }

  @Get('all')
  async findAll() {
    const result = await this.patientService.findAll()
    return result
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.patientService.findOne(id)
    return result
  }

  @Put('update')
  async update(@Body() data: UpdatePatientDto) {
    const result = await this.patientService.update(data)
    return result
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.patientService.delete(id)
    return result
  }
}
