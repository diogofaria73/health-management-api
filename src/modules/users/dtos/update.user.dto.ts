import { ApiProperty, ApiTags } from '@nestjs/swagger'
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator'

@ApiTags('Users')
export class UpdateUserDto {
  @ApiProperty({ example: 'cuuid' })
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty({ example: 'José Belini da Silva Cruz' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ example: 'jose.belini@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({ example: 'fadababca@123' })
  @IsNotEmpty()
  @IsString()
  @Length(8, 16)
  password: string

  @ApiProperty({ example: true })
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean

  @ApiProperty({ example: true })
  @IsNotEmpty()
  @IsBoolean()
  isAdmin: boolean
}
