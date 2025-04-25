import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchQuoteDto {
  @Field({ nullable: true })
  quote?: string;

  @Field({ nullable: true })
  author?: string;

  @Field({ nullable: true })
  startDate?: Date;

  @Field({ nullable: true })
  endDate?: Date;
}
