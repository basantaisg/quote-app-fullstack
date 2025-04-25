import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuoteInput } from './dtos/create-quote.input';
import { UpdateQuoteInput } from './dtos/update-quote.input';
import { SearchQuoteInput } from './dtos/search-quote.input';

@Injectable()
export class QuoteService {
  constructor(private readonly prisma: PrismaService) {}

  getAllQuotes() {
    console.log(this.prisma.quote.findMany());

    return this.prisma.quote.findMany();
  }

  getQuoteById(id: number) {
    return this.prisma.quote.findUnique({
      where: { id },
    });
  }

  createQuote(data: CreateQuoteInput) {
    return this.prisma.quote.create({ data });
  }

  updateQuote(id: number, data: UpdateQuoteInput) {
    return this.prisma.quote.update({
      where: { id },
      data,
    });
  }

  deleteQuote(id: number) {
    return this.prisma.quote.delete({
      where: { id },
    });
  }

  // Search quote!

  searchQuote(params: SearchQuoteInput) {
    const { text, author, startDate, endDate } = params;

    return this.prisma.quote.findMany({
      where: {
        AND: [
          text ? { text: { contains: text, mode: 'insensitive' } } : {},
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
