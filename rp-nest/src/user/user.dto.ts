import { IsEmail, IsString, IsDate } from 'class-validator'

export class UserDto {
  @IsString()
  readonly name: string

  @IsEmail()
  readonly email: string

  @IsDate()
  readonly createdAt?: Date
}
