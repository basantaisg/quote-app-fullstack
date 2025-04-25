import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Quote {
  @Field(() => Int)
  id: number;
  @Field()
  quote: string;
  @Field()
  author: string;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
}
