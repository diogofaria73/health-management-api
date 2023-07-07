/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'

import { PrismaService } from '@infra/database/prisma.service'
import { CategoryRepository } from './repositories/concrete/UserRepository'
import { CategoryService } from './services/category.service'
import { CategoryController } from './services/category.controller'

@Module({
  controllers: [CategoryController],
  providers: [PrismaService, CategoryService, CategoryRepository],
})
export class CategoryModule { }
