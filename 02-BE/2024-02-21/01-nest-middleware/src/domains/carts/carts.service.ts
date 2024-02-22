import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class CartsService {
  constructor(private readonly prismaService: PrismaService) {}

  //* get
  async getCart(userId: number) {
    const products = await this.prismaService.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: {
              include: {
                brand: true,
              },
            },
          },
        },
      },
    });

    return products;
  }

  //* create
  async addItemToCart(userId: number, productId: number | undefined) {
    if (!productId) throw new BadRequestException('No ProductId!');

    const cartItem = await this.prismaService.cartItem.upsert({
      where: { cartId_productId: { cartId: userId, productId } },
      create: {
        cartId: userId,
        productId,
        quantity: 1,
      },
      update: {
        quantity: {
          increment: 1,
        },
      },
    });

    return cartItem;
  }

  //* update
  async removeItemFromCart(userId: number, productId: number | undefined) {
    if (!productId) throw new BadRequestException('No ProductId!');

    //* 1. 일단 무조건 decrement한다. (개수 상관 없이)
    const cartItem = await this.prismaService.cartItem.update({
      where: { cartId_productId: { cartId: userId, productId } },
      data: {
        quantity: { decrement: 1 },
      },
    });

    //* 2. decrement한 수량이 0이라면 제거
    if (cartItem.quantity === 0) {
      await this.clearItemInCart(userId, productId);
    }

    // //! 1. 해당 아이템의 수량을 확인한다 👉 수량이 1개 이상이라면 update(-1) / 1개라면 delete해야 하므로 현재 수량을 확인
    // const cartItem = await this.prismaService.cartItem.findUnique({
    //   where: {
    //     cartId_productId: { cartId: userId, productId },
    //   },
    // });

    // //!. 수량에 따라 분기
    // if (cartItem.quantity > 1) {
    //   await this.prismaService.cartItem.update({
    //     where: { id: cartItem.id },
    //     data: {
    //       quantity: { decrement: 1 },
    //     },
    //   });
    // } else {
    //   await this.prismaService.cartItem.delete({
    //     where: { id: cartItem.id },
    //   });
    // }

    return cartItem;
  }

  //* delete
  async clearItemInCart(userId: number, productId: number | undefined) {
    if (!productId) throw new BadRequestException('No ProductId!');

    const cartItem = await this.prismaService.cartItem.delete({
      where: { cartId_productId: { cartId: userId, productId } },
    });

    return cartItem;
  }
}
