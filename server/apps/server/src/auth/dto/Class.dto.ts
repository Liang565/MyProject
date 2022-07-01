import { ApiProperty } from '@nestjs/swagger';

export class ClassDto {
  @ApiProperty() //
  title: string;
  @ApiProperty() //
  parent: {};
  @ApiProperty() //
  children: {};
}
