import { ApiProperty, ApiTags } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

@ApiTags('Categories')
export class UpdateCategoryDto {
  @ApiProperty({ example: 'cuuid' })
  @IsNotEmpty()
  id: string

  @ApiProperty({ example: 'Curativos' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ example: 'Curativos compostos por carvão ativado' })
  @IsNotEmpty()
  @IsString()
  description: string

  @ApiProperty({ example: true })
  @IsBoolean()
  isActive: boolean
}
