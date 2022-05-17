import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  username: string;

  password: string;

  role: string;

  state: boolean;
  image: string;
  promiss: [];
}
