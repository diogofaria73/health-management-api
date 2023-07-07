import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common'
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger'
import { MessageHelper } from 'src/helpers/messages-helper'
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
  async create(@Body() data: CreateCategoryDto, res: Response) {
    try {
      const result = await this.categoryService.create(data)
      return result
    } catch (error) {
      throw new HttpException(MessageHelper.UNIQUE_EMAIL, HttpStatus.CONFLICT)
    }
  }

  @Get('all')
  async findAll() {
    try {
      const result = await this.categoryService.findAll()
      return result
    } catch (error) {
      throw new HttpException(
        MessageHelper.GET_REGISTER_FROM_DATABASE,
        HttpStatus.BAD_REQUEST,
      )
    }
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.categoryService.findOne(id)
      return result
    } catch (error) {
      throw new HttpException(
        MessageHelper.GET_REGISTER_FROM_DATABASE,
        HttpStatus.BAD_REQUEST,
      )
    }
  }

  @Put('update')
  async update(@Body() data: UpdateCategoryDto) {
    try {
      const result = await this.categoryService.update(data)
      return result
    } catch (error) {
      throw new HttpException(
        MessageHelper.UPDATE_REGISTER_FROM_DATABASE,
        HttpStatus.BAD_REQUEST,
      )
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.categoryService.delete(id)
      return result
    } catch (error) {
      throw new HttpException(
        MessageHelper.DELETE_REGISTER_FROM_DATABASE,
        HttpStatus.BAD_REQUEST,
      )
    }
  }
}
