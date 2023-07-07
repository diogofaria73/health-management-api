import { PrismaService } from '@infra/database/prisma.service'
import { CategoryModule } from '@modules/category/category.module'
import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'

@Module({
  imports: [
    CategoryModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [PrismaService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
