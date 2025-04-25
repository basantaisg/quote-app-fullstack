import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { QuoteModule } from './quote/quote.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

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
