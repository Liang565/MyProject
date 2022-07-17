import { Action } from './models/action.model';
import { Commodity } from './models/commodity.model';
import { CommodityClass } from './models/commodityClass.model';
import { Components } from './models/components.model';
import { Order } from './models/order.model';
import { Promiss } from './models/promiss.model';
import { Shop } from './models/shop.model';
import { ShoppingCart } from './models/shoppingCart.model';

import { User } from './models/user.model';
import { UserInfo } from './models/userInfo.model';

export const models = [
  Commodity,
  CommodityClass,
  Order,
  User,
  Shop,
  Promiss,
  ShoppingCart,
  UserInfo,
  Action,
  Components,
];
