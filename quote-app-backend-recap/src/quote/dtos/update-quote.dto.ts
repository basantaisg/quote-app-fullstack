import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateQuoteDto {
  @Field({ nullable: true })
  @IsOptional()
  quote?: string;
  @Field({ nullable: true })
  @IsOptional()
  author?: string;
}
