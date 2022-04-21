import { ApiProperty } from '@nestjs/swagger';

export class updataDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  parent: string;
}
