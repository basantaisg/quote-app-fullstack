import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QuoteService } from './quote.service';
import { QuoteModel } from './entities/quote.model';
import { CreateQuoteInput } from './dtos/create-quote.input';
import { UpdateQuoteInput } from './dtos/update-quote.input';
import { SearchQuoteInput } from './dtos/search-quote.input';

@Resolver()
export class QuoteResolver {
  constructor(private readonly quoteService: QuoteService) {}

  //   Queries and mutations design!

  @Query(() => [QuoteModel])
  async getAllQuotes() {
    return this.quoteService.getAllQuotes();
  }

  @Query(() => QuoteModel)
  async getQuoteById(@Args('id', { type: () => Int }) id: number) {
    return this.quoteService.getQuoteById(id);
  }

  @Mutation(() => QuoteModel)
  async createQuote(@Args('input') input: CreateQuoteInput) {
    return this.quoteService.createQuote(input);
  }

  @Mutation(() => QuoteModel)
  async updateQuote(
    @Args('input') input: UpdateQuoteInput,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.quoteService.updateQuote(id, input);
  }

  @Mutation(() => QuoteModel)
  async deleteQuote(@Args('id', { type: () => Int }) id: number) {
    return this.quoteService.deleteQuote(id);
  }

  // Search!

  @Query(() => [QuoteModel])
  searchQuotes(@Args('input') input: SearchQuoteInput) {
    return this.quoteService.searchQuote(input);
  }
}
