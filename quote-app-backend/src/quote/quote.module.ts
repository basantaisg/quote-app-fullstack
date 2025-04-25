import { Module } from '@nestjs/common';
import { QuoteResolver } from './quote.resolver';
import { QuoteService } from './quote.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [QuoteResolver, QuoteService, PrismaService],
})
export class QuoteModule {}
