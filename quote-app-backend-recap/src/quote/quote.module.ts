import { Module } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { QuoteResolver } from './quote.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [QuoteService, QuoteResolver, PrismaService],
})
export class QuoteModule {}
