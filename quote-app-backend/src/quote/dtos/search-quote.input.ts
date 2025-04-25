import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchQuoteInput {
  @Field({ nullable: true })
  text?: string;

  @Field({ nullable: true })
  author?: string;

  @Field({ nullable: true })
  startDate?: Date;

  @Field({ nullable: true })
  endDate?: Date;
}
