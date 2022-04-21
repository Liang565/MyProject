import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty()
  username: string;
  @ApiProperty() //
  password: string;
  @ApiProperty() //
  role: string;
  @ApiProperty() //
  state: boolean;
}
