import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose-next';
import { StrategyOptions, Strategy, ExtractJwt } from 'passport-jwt';
import { BadRequestException } from '@nestjs/common';

import { ReturnModelType } from '@typegoose/typegoose';
import { compareSync } from 'bcryptjs';
import { User } from 'libs/db/models/user.model';
//策略类，密码登录的逻辑
// export class LocalStrategy extends PassportStrategy(Strategy,决定守卫的名字，默认passport-(后面的东西)local){

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
  ) {
    super({
      //jwt登录 一：把token取出来，
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //二解析token得到_id
      secretOrKey: 'sifhgioaehgbb', //这个需要保持一致
    } as StrategyOptions); //接收的参数  as明确表示前面的{}是个什么类型
  }
  //表示如何去执行验证
  //上面username password 这两个自动从request包里面请求过来的然后自动调用下面方法并传值
  async validate(id) {
    return await this.userModel.findById(id);
  }
}
