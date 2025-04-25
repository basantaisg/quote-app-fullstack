import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QuoteService } from './quote.service';
import { Quote } from './entities/quote.model';
import { CreateQuoteDto } from './dtos/create-quote.dto';
import { UpdateQuoteDto } from './dtos/update-quote.dto';
import { SearchQuoteDto } from './dtos/search-quote.dto';

@Resolver()
export class QuoteResolver {
  constructor(private readonly quoteService: QuoteService) {}

  @Query(() => [Quote])
  async getAllQuotes() {
    return await this.quoteService.getAllQuotes();
  }

  @Query(() => Quote)
  async getQuoteById(@Args('id', { type: () => Int }) id: number) {
    return await this.quoteService.getQuoteById(id);
  }

  @Query(() => [Quote])
  async getQuoteByAuthor(
    @Args('author', { type: () => String }) author: string,
  ) {
    return await this.quoteService.getQuoteByAuthor(author);
  }

  @Mutation(() => Quote)
  async createQuote(
    @Args('input', { type: () => CreateQuoteDto }) input: CreateQuoteDto,
  ) {
    return await this.quoteService.createQuote(input);
  }

  @Mutation(() => Quote)
  async updateQuote(
    @Args('id', { type: () => Int }) id: number,
    @Args('input', { type: () => UpdateQuoteDto }) input: UpdateQuoteDto,
  ) {
    return await this.quoteService.updateQuote(id, input);
  }

  @Mutation(() => Quote)
  async deleteQuote(@Args('id', { type: () => Int }) id: number) {
    return await this.quoteService.deleteQuote(id);
  }

  // search!

  @Query(() => [Quote])
  searchQuote(
    @Args('search', { type: () => SearchQuoteDto }) search: SearchQuoteDto,
  ) {
    return this.quoteService.searchQuote(search);
  }
}
