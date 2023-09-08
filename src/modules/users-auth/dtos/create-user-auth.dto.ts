import { ApiProperty, ApiTags } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator'

@ApiTags('Authenticate')
export class CreateUserAuthDto {
  @ApiProperty({ example: 'josue@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({ example: 'fac@baba123' })
  @IsStrongPassword()
  password: string
}
