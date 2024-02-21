import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './db/prisma/prisma.module';
import { AccountsModule } from './domains/accounts/accounts.module';
import { BrandsModule } from './domains/brands/brands.module';
import { CartsModule } from './domains/carts/carts.module';
import { OrdersModule } from './domains/orders/orders.module';
import { ProductsModule } from './domains/products/products.module';
import { LoggedOnlyGuard } from './guards/LoggedInOnly.guard';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: LoggedOnlyGuard }],
  imports: [
    AccountsModule,
    ProductsModule,
    OrdersModule,
    CartsModule,
    PrismaModule,
    BrandsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
