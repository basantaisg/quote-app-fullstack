import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuoteDto } from './dtos/create-quote.dto';
import { UpdateQuoteDto } from './dtos/update-quote.dto';
import { SearchQuoteDto } from './dtos/search-quote.dto';
import { contains } from 'class-validator';

@Injectable()
export class QuoteService {
  constructor(private readonly prismaService: PrismaService) {}

  async createQuote(input: CreateQuoteDto) {
    return await this.prismaService.quote.create({ data: input });
  }

  async getAllQuotes() {
    return await this.prismaService.quote.findMany();
  }

  async getQuoteById(id: number) {
    return await this.prismaService.quote.findUnique({ where: { id } });
  }

  async getQuoteByAuthor(author: string) {
    return await this.prismaService.quote.findMany({ where: { author } });
  }

  async updateQuote(id: number, input: UpdateQuoteDto) {
    return await this.prismaService.quote.update({
      where: { id },
      data: input,
    });
  }

  async deleteQuote(id: number) {
    return await this.prismaService.quote.delete({ where: { id } });
  }

  //   Search quote feature!

  async searchQuote(params: SearchQuoteDto) {
    const { quote, author, startDate, endDate } = params;

    return this.prismaService.quote.findMany({
      where: {
        AND: [
          quote ? { quote: { contains: quote, mode: 'insensitive' } } : {},
          author ? { author: { contains: author, mode: 'insensitive' } } : {},
          startDate || endDate
            ? {
                createdAt: {
                  gte: startDate ?? undefined,
                  lte: endDate ?? undefined,
                },
              }
            : {},
        ],
      },
    });
  }
}
