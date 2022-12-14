import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user;
  },
);

export const CurrentUserId = createParamDecorator(
  (data, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user?._id;
  },
);
