import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
@Injectable()
export class LoginInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const req = context.switchToHttp().getRequest();
    // console.log('登录拦截器');
    // console.log(req.body);

    //拦截道admin的身份信息，就执行免密码登录。
    // const { user } = req.user;
    // let userOption = JSON.parse(user);
    // console.log(userOption);
    return next.handle();
  }
}
