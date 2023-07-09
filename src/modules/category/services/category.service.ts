import { Injectable } from '@nestjs/common'
import { Category } from '@prisma/client'
import { CreateCategoryDto } from '../dtos/create-category-dto'
import { UpdateCategoryDto } from '../dtos/update-category-dto'
import { CategoryRepository } from '../repositories/concrete/CategoryRepository'

@Injectable()
export class CategoryService {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly categoryRepository: CategoryRepository) { }

  async create(data: CreateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.create(data)
    return category
  }

  async update(data: UpdateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.update(data)
    return category
  }

  async delete(id: string): Promise<Category> {
    const category = await this.categoryRepository.delete(id)
    return category
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryRepository.findOne(id)
    return category
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.categoryRepository.findAll()
    return categories
  }
}
