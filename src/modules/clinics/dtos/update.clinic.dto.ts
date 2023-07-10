import { ApiProperty, ApiTags } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

@ApiTags('Clinics')
export class UpdateClinicDto {
  @ApiProperty({ example: 'cuuid' })
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty({ example: 'Clinica José Oliveira Filho' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ example: 'Rua do Sossego' })
  @IsNotEmpty()
  @IsString()
  street: string

  @ApiProperty({ example: '158' })
  @IsNotEmpty()
  @IsString()
  number: string

  @ApiProperty({ example: '20A' })
  @IsString()
  complement: string

  @ApiProperty({ example: 'Floresta' })
  @IsNotEmpty()
  @IsString()
  neighborhood: string

  @ApiProperty({ example: '31015-260' })
  @IsNotEmpty()
  @IsString()
  postalCode: string

  @ApiProperty({ example: 'Belo Horizonte' })
  @IsNotEmpty()
  @IsString()
  city: string

  @ApiProperty({ example: 'Minas Gerais' })
  @IsNotEmpty()
  @IsString()
  state: string

  @ApiProperty({ example: true })
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean
}
