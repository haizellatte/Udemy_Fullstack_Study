import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './db/prisma/prisma.module';
import { PrismaService } from './db/prisma/prisma.service';
import { AccountsModule } from './domains/accounts/accounts.module';
import { CartsModule } from './domains/carts/carts.module';
import { OrdersModule } from './domains/orders/orders.module';
import { ProductsModule } from './domains/products/products.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [
    AccountsModule,
    ProductsModule,
    OrdersModule,
    CartsModule,
    PrismaModule,
  ],
})
export class AppModule {}
