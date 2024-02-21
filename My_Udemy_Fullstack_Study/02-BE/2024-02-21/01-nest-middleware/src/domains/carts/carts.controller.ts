import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { DUser } from 'src/decorators/user.decorator';
import { LoggedInOnly } from 'src/decorators/userOnly.decorator';
import { CartsService } from './carts.service';

@Controller('cart')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get()
  @LoggedInOnly()
  getCart(@DUser() user: User) {
    return this.cartsService.getCart(user.id);
  }

  // @Post()
  // @LoggedInOnly()
  // addItemToCart(@Body dto: CartAddItemToCartDto, @DUser user: User) {
  //   this.cartsService.addItemToCart();
  // }

  @Post('products/:productId')
  @LoggedInOnly()
  addItemToCart(
    @Param('productId', ParseIntPipe) productId: number,
    @DUser() user: User,
  ) {
    return this.cartsService.addItemToCart(user.id, productId);
  }

  @Put('products/:productId')
  @LoggedInOnly()
  removeItemFromCart(
    @Param('productId', ParseIntPipe) productId: number,
    @DUser() user: User,
  ) {
    return this.cartsService.removeItemFromCart(user.id, productId);
  }

  @Delete('products/:productId/clear')
  @LoggedInOnly()
  clearItemInCart(
    @Param('productId', ParseIntPipe) productId: number,
    @DUser() user: User,
  ) {
    return this.cartsService.clearItemInCart(user.id, productId);
  }
}
