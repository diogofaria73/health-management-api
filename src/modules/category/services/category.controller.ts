import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger'
import { CategoryService } from './category.service'
import { UpdateCategoryDto } from '../dtos/update-category-dto'
import { CreateCategoryDto } from '../dtos/create-category-dto'

@ApiBasicAuth()
@ApiTags('Categories')
@Controller(`${'/api/'}${process.env.API_VERSION}${'/category'}`)
export class CategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly categoryService: CategoryService) { }

  @Post('create')
  async create(@Body() data: CreateCategoryDto) {
    const result = await this.categoryService.create(data)
    return result
  }

  @Get('all')
  async findAll() {
    const result = await this.categoryService.findAll()
    return result
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.categoryService.findOne(id)
    return result
  }

  @Put('update')
  async update(@Body() data: UpdateCategoryDto) {
    const result = await this.categoryService.update(data)
    return result
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.categoryService.delete(id)
    return result
  }
}
