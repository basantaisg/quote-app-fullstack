import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateQuoteDto {
  @Field()
  @IsNotEmpty()
  quote: string;
  @Field()
  @IsNotEmpty()
  author: string;
}
