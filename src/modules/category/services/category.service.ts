import { Injectable } from '@nestjs/common'
import { EncryptPassword } from '../helpers/security/encripty.password'
import { CategoryRepository } from '../repositories/concrete/UserRepository'
import { CreateCategoryDto } from '../dtos/create-category-dto'
import { Category } from '@prisma/client'
import { UpdateCategoryDto } from '../dtos/update-category-dto'

@Injectable()
export class CategoryService {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly categoryRepository: CategoryRepository) { }

  async create(data: CreateCategoryDto): Promise<Category> {
    const user = await this.categoryRepository.create(data)
    return user
  }

  async update(data: UpdateCategoryDto): Promise<Category> {
    const user = await this.categoryRepository.update(data)
    return user
  }

  async delete(id: string): Promise<Category> {
    const user = await this.categoryRepository.delete(id)
    return user
  }

  async findOne(id: string): Promise<Category> {
    const user = await this.categoryRepository.findOne(id)
    return user
  }

  async findAll(): Promise<Category[]> {
    const result = await this.categoryRepository.findAll()
    return result
  }

}
