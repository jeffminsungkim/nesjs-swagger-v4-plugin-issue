import { ApiProperty } from '@nestjs/swagger';

export class Profile {
  @ApiProperty({ example: 'Jeff', description: 'The name of a person' })
  name: string;

  @ApiProperty({ example: 29, description: 'The age of a person' })
  age: number;
}
