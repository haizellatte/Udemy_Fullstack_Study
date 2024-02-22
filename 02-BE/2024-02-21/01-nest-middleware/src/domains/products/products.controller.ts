import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
// import { UserOnlyGuard } from 'src/guards/userOnly.guard';
import { LoggedInOnly } from 'src/decorators/userOnly.decorator';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @LoggedInOnly()
  // @UseGuards(UserOnlyGuard)
  async getPorducts() {
    const products = await this.productsService.getProducts();

    return products;
  }

  @Get(':productId')
  async findOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.getProduct(productId);
  }
}
