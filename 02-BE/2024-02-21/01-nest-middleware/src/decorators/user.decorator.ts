import { createParamDecorator, ExecutionContext } from '@nestjs/common';

//! Nest 커스텀 데코레이터 (https://docs.nestjs.com/custom-decorators)
export const DUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
