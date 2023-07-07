import { IGenericRepository } from '@core/shared/interfaces/IGeneric-Repository'
import { PrismaService } from '@infra/database/prisma.service'
import { CreateCategoryDto } from '@modules/category/dtos/create-category-dto'
import { UpdateCategoryDto } from '@modules/category/dtos/update-category-dto'
import { Injectable } from '@nestjs/common'
import { Category } from '@prisma/client'

@Injectable()
export class CategoryRepository implements IGenericRepository<Category> {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateCategoryDto): Promise<Category> {
    const result = await this.prisma.category.create({ data })
    return result
  }

  async update(data: UpdateCategoryDto): Promise<Category> {
    const result = await this.prisma.category.update({
      where: {
        id: data.id,
      },
      data,
    })

    return result
  }

  async delete(id: string): Promise<Category> {
    const result = await this.prisma.category.delete({
      where: {
        id,
      },
    })
    return result
  }

  async findOne(id: string): Promise<Category> {
    const result = await this.prisma.category.findFirst()
    return result
  }

  async findAll(): Promise<Category[]> {
    const result = await this.prisma.category.findMany()
    return result
  }
}
