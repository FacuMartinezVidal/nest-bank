import { IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  readonly email: string;

  readonly password: string;
}
