import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { QuoteModule } from './quote/quote.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'src/graphql/schema.gql',
      driver: ApolloDriver,
      playground: true,
    }),
    PrismaModule,
    QuoteModule,
  ],
  providers: [AppService],
})
export class AppModule {}
