import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateQuoteInput {
  @Field()
  @IsNotEmpty()
  text: string;

  @Field()
  @IsNotEmpty()
  author: string;
}
