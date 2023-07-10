import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger'
import { ClinicService } from './clinic.service'
import { CreateClinicDto } from '../dtos/create.clinic.dto'
import { UpdateClinicDto } from '../dtos/update.clinic.dto'

@ApiBasicAuth()
@ApiTags('Clinics')
@Controller(`${'/api/'}${process.env.API_VERSION}${'/clinic'}`)
export class ClinicController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly clinicService: ClinicService) { }

  @Post('create')
  async create(@Body() data: CreateClinicDto) {
    const result = await this.clinicService.create(data)
    return result
  }

  @Get('all')
  async findAll() {
    const result = await this.clinicService.findAll()
    return result
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.clinicService.findOne(id)
    return result
  }

  @Put('update')
  async update(@Body() data: UpdateClinicDto) {
    const result = await this.clinicService.update(data)
    return result
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.clinicService.delete(id)
    return result
  }
}
