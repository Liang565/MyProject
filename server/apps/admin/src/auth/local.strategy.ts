import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose-next';
import { IStrategyOptions, Strategy } from 'passport-local';
import { BadRequestException } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { compareSync } from 'bcryptjs';
import { User } from 'libs/db/models/user.model';
//策略类，密码登录的逻辑
// export class LocalStrategy extends PassportStrategy(Strategy,决定守卫的名字，默认passport-(后面的东西)local){

export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
  ) {
    super({
      usernameField: 'username',
      passwordField: 'password',
      //这两个自动从request包里面请求过来的然后
    } as IStrategyOptions); //本地策略接收的参数  as明确表示前面的{}是个什么类型
  }
  //表示如何去执行验证 async validate()
  //上面username password 这两个自动从request包里面请求过来的然后自动调用下面方法并传值
  async validate(username: string, password: string) {
    const user = await this.userModel
      .findOne({ username: username })
      .select('+password'); //通过用户名查用户 select 手动把密码查出来
    if (!user) {
      throw new BadRequestException('用户不正确'); //抛出错误
    }
    //compareSync 因为用bcryptjs散列密码，所以要用里面的compareSync来进行密码对比
    if (!compareSync(password, user.password)) {
      //明文密码和散列密码比对
      throw new BadRequestException('密码不正确');
    }
    return user;
  }
}
