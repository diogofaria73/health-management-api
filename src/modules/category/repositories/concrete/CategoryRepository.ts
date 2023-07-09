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
    const category = await this.prisma.category.create({ data })
    return category
  }

  async update(data: UpdateCategoryDto): Promise<Category> {
    const category = await this.prisma.category.update({
      where: {
        id: data.id,
      },
      data,
    })

    return category
  }

  async delete(id: string): Promise<Category> {
    const category = await this.prisma.category.delete({
      where: {
        id,
      },
    })
    return category
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.prisma.category.findFirst({
      where: { id },
    })
    return category
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.prisma.category.findMany()
    return categories
  }
}
