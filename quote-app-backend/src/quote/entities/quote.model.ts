import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class QuoteModel {
  @Field(() => Int)
  id: number;
  @Field()
  text: string;
  @Field()
  author: string;
  @Field()
  createdAt: Date;
}
