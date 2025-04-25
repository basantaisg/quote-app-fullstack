import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateQuoteInput {
  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  text?: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  author?: string;
}
