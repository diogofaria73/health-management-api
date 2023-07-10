import { ApiProperty, ApiTags } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

@ApiTags('Patients')
export class UpdatePatientDto {
  @ApiProperty({ example: 'cuuid' })
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty({ example: 'José Belini da Silva Cruz' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ example: '1972-01-01' })
  @IsNotEmpty()
  @IsString()
  birthDate: string

  @ApiProperty({ example: '089.887.256-85' })
  @IsNotEmpty()
  @IsString()
  documentNumber: string

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


  @ApiProperty({ example: 'ccuid' })
  @IsNotEmpty()
  @IsString()
  clinicId: string
}
