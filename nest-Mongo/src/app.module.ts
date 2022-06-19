import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://123:H7pZKYoYTd7z7P9b@cluster0.ghoge.mongodb.net/nest-Mongo?retryWrites=true&w=majority'
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
