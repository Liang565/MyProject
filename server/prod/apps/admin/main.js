/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/admin/src/admin.controller.ts":
/*!********************************************!*\
  !*** ./apps/admin/src/admin.controller.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const admin_service_1 = __webpack_require__(/*! ./admin.service */ "./apps/admin/src/admin.service.ts");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async upload(file) {
        return file;
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)('file')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "upload", null);
AdminController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" ? _a : Object])
], AdminController);
exports.AdminController = AdminController;


/***/ }),

/***/ "./apps/admin/src/admin.module.ts":
/*!****************************************!*\
  !*** ./apps/admin/src/admin.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_1 = __webpack_require__(/*! libs/db */ "./libs/db/src/index.ts");
const admin_controller_1 = __webpack_require__(/*! ./admin.controller */ "./apps/admin/src/admin.controller.ts");
const admin_service_1 = __webpack_require__(/*! ./admin.service */ "./apps/admin/src/admin.service.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./apps/admin/src/users/users.module.ts");
const commoditys_module_1 = __webpack_require__(/*! ./commoditys/commoditys.module */ "./apps/admin/src/commoditys/commoditys.module.ts");
const commodity_class_module_1 = __webpack_require__(/*! ./commodity-class/commodity-class.module */ "./apps/admin/src/commodity-class/commodity-class.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/admin/src/auth/auth.module.ts");
const common_2 = __webpack_require__(/*! libs/common */ "./libs/common/src/index.ts");
const shops_module_1 = __webpack_require__(/*! ./shops/shops.module */ "./apps/admin/src/shops/shops.module.ts");
const orders_module_1 = __webpack_require__(/*! ./orders/orders.module */ "./apps/admin/src/orders/orders.module.ts");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const promiss_module_1 = __webpack_require__(/*! ./promiss/promiss.module */ "./apps/admin/src/promiss/promiss.module.ts");
const components_controller_1 = __webpack_require__(/*! ./components/components.controller */ "./apps/admin/src/components/components.controller.ts");
const components_module_1 = __webpack_require__(/*! ./components/components.module */ "./apps/admin/src/components/components.module.ts");
const build_home_module_1 = __webpack_require__(/*! ./build-home/build-home.module */ "./apps/admin/src/build-home/build-home.module.ts");
const MAO = __webpack_require__(/*! multer-aliyun-oss */ "multer-aliyun-oss");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.registerAsync({
                useFactory() {
                    return {
                        storage: MAO({
                            config: {
                                region: process.env.OSS_REGION,
                                accessKeyId: process.env.OSS_ACCESSKEYID,
                                accessKeySecret: process.env.OSS_ACCESSKEYSECRET,
                                bucket: process.env.OSS_BUCKET,
                            },
                        }),
                    };
                },
            }),
            db_1.DbModule,
            common_2.CommonModule,
            users_module_1.UsersModule,
            commoditys_module_1.CommoditysModule,
            commodity_class_module_1.CommodityClassModule,
            auth_module_1.AuthModule,
            shops_module_1.ShopsModule,
            orders_module_1.OrdersModule,
            promiss_module_1.PromissModule,
            components_module_1.ComponentsModule,
            build_home_module_1.BuildHomeModule,
        ],
        controllers: [admin_controller_1.AdminController, components_controller_1.ComponentsController],
        providers: [admin_service_1.AdminService],
    })
], AdminModule);
exports.AdminModule = AdminModule;


/***/ }),

/***/ "./apps/admin/src/admin.service.ts":
/*!*****************************************!*\
  !*** ./apps/admin/src/admin.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AdminService = class AdminService {
    getHello() {
        return 'Hello World!baby';
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)()
], AdminService);
exports.AdminService = AdminService;


/***/ }),

/***/ "./apps/admin/src/auth/auth.controller.ts":
/*!************************************************!*\
  !*** ./apps/admin/src/auth/auth.controller.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const user_model_1 = __webpack_require__(/*! libs/db/models/user.model */ "./libs/db/src/models/user.model.ts");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
const login_dto_1 = __webpack_require__(/*! ./dto/login.dto */ "./apps/admin/src/auth/dto/login.dto.ts");
const register_dto_1 = __webpack_require__(/*! ./dto/register.dto */ "./apps/admin/src/auth/dto/register.dto.ts");
let AuthController = class AuthController {
    constructor(jwtService, userModel) {
        this.jwtService = jwtService;
        this.userModel = userModel;
    }
    async register(dto) {
        const { username, password } = dto;
        if (username == '' || password == '') {
            throw new common_1.BadRequestException('用户名或者密码为空');
        }
        const res = await this.userModel.findOne({ username });
        if (!res) {
            const user = await this.userModel.create({
                username,
                password,
                role: 'user',
                state: true,
            });
            return user;
        }
        else {
            throw new common_1.BadRequestException('用户已注册');
        }
    }
    async login(dto, req) {
        return {
            token: this.jwtService.sign(String(req.user._id)),
        };
    }
    async user(req) {
        const user = await this.userModel
            .findById(req.user._id)
            .populate('promiss');
        return user;
    }
};
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: '注册' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: '登录' }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('user'),
    (0, swagger_1.ApiOperation)({ summary: '获取信息' }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "user", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('登录'),
    __param(1, (0, nestjs_typegoose_next_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object, typeof (_d = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _d : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/admin/src/auth/auth.module.ts":
/*!********************************************!*\
  !*** ./apps/admin/src/auth/auth.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/admin/src/auth/auth.controller.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./apps/admin/src/auth/jwt.strategy.ts");
const local_strategy_1 = __webpack_require__(/*! ./local.strategy */ "./apps/admin/src/auth/local.strategy.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [passport_1.PassportModule],
        controllers: [auth_controller_1.AuthController],
        providers: [local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/admin/src/auth/current-user.ts":
/*!*********************************************!*\
  !*** ./apps/admin/src/auth/current-user.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUserId = exports.CurrentUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    return context.switchToHttp().getRequest().user;
});
exports.CurrentUserId = (0, common_1.createParamDecorator)((data, context) => {
    var _a;
    return (_a = context.switchToHttp().getRequest().user) === null || _a === void 0 ? void 0 : _a._id;
});


/***/ }),

/***/ "./apps/admin/src/auth/dto/Class.dto.ts":
/*!**********************************************!*\
  !*** ./apps/admin/src/auth/dto/Class.dto.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ClassDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ClassDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], ClassDto.prototype, "parent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], ClassDto.prototype, "children", void 0);
exports.ClassDto = ClassDto;


/***/ }),

/***/ "./apps/admin/src/auth/dto/build.dto.ts":
/*!**********************************************!*\
  !*** ./apps/admin/src/auth/dto/build.dto.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class buildDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], buildDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], buildDto.prototype, "components", void 0);
exports.buildDto = buildDto;


/***/ }),

/***/ "./apps/admin/src/auth/dto/login.dto.ts":
/*!**********************************************!*\
  !*** ./apps/admin/src/auth/dto/login.dto.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class LoginDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;


/***/ }),

/***/ "./apps/admin/src/auth/dto/register.dto.ts":
/*!*************************************************!*\
  !*** ./apps/admin/src/auth/dto/register.dto.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDto = void 0;
class RegisterDto {
}
exports.RegisterDto = RegisterDto;


/***/ }),

/***/ "./apps/admin/src/auth/dto/shop.dto.ts":
/*!*********************************************!*\
  !*** ./apps/admin/src/auth/dto/shop.dto.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ShopDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '商铺名称' }),
    __metadata("design:type", String)
], ShopDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '所属用户' }),
    __metadata("design:type", String)
], ShopDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '商铺简介' }),
    __metadata("design:type", String)
], ShopDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '商铺图片' }),
    __metadata("design:type", String)
], ShopDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '商铺地址' }),
    __metadata("design:type", String)
], ShopDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '商铺电话' }),
    __metadata("design:type", String)
], ShopDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '组件' }),
    __metadata("design:type", Array)
], ShopDto.prototype, "components", void 0);
exports.ShopDto = ShopDto;


/***/ }),

/***/ "./apps/admin/src/auth/dto/updata.dto.ts":
/*!***********************************************!*\
  !*** ./apps/admin/src/auth/dto/updata.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updataDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class updataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], updataDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], updataDto.prototype, "parent", void 0);
exports.updataDto = updataDto;


/***/ }),

/***/ "./apps/admin/src/auth/jwt.strategy.ts":
/*!*********************************************!*\
  !*** ./apps/admin/src/auth/jwt.strategy.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const user_model_1 = __webpack_require__(/*! libs/db/models/user.model */ "./libs/db/src/models/user.model.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor(userModel) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET,
        });
        this.userModel = userModel;
    }
    async validate(id) {
        return await this.userModel.findById(id);
    }
};
JwtStrategy = __decorate([
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/admin/src/auth/local.strategy.ts":
/*!***********************************************!*\
  !*** ./apps/admin/src/auth/local.strategy.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const bcryptjs_1 = __webpack_require__(/*! bcryptjs */ "bcryptjs");
const user_model_1 = __webpack_require__(/*! libs/db/models/user.model */ "./libs/db/src/models/user.model.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'local') {
    constructor(userModel) {
        super({
            usernameField: 'username',
            passwordField: 'password',
        });
        this.userModel = userModel;
    }
    async validate(username, password) {
        console.log('执行守卫');
        const user = await this.userModel
            .findOne({ username: username })
            .select('+password');
        if (!user) {
            throw new common_1.BadRequestException('用户不正确');
        }
        if (!(0, bcryptjs_1.compareSync)(password, user.password)) {
            throw new common_1.BadRequestException('密码不正确');
        }
        return user;
    }
};
LocalStrategy = __decorate([
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./apps/admin/src/build-home/build-home.controller.ts":
/*!************************************************************!*\
  !*** ./apps/admin/src/build-home/build-home.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BuildHomeController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
const buildHome_model_1 = __webpack_require__(/*! libs/db/models/buildHome.model */ "./libs/db/src/models/buildHome.model.ts");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const nestjs_mongoose_crud_1 = __webpack_require__(/*! nestjs-mongoose-crud */ "nestjs-mongoose-crud");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const build_dto_1 = __webpack_require__(/*! ../auth/dto/build.dto */ "./apps/admin/src/auth/dto/build.dto.ts");
let BuildHomeController = class BuildHomeController {
    constructor(model) {
        this.model = model;
    }
    async create(dto) {
        const { name, components } = dto;
        if (!name || name == '') {
            throw new common_1.BadRequestException('配置名为空');
        }
        const res = await this.model.findOne({ name: name });
        if (res) {
            throw new common_1.BadRequestException('配置名已存在');
        }
        else {
            const res = await this.model.create({
                name: name,
                components: components,
            });
            return res;
        }
    }
    async findone(dto) {
        const { name } = dto;
        if (!name || name == '') {
            throw new common_1.BadRequestException('配置名为空');
        }
        const res = await this.model.findOne({ name: name });
        if (res) {
            return res;
        }
        else {
            return null;
        }
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: '新增配置' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof build_dto_1.buildDto !== "undefined" && build_dto_1.buildDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], BuildHomeController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('findone'),
    (0, swagger_1.ApiOperation)({ summary: '搜索配置' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof build_dto_1.buildDto !== "undefined" && build_dto_1.buildDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], BuildHomeController.prototype, "findone", null);
BuildHomeController = __decorate([
    (0, nestjs_mongoose_crud_1.Crud)({
        model: buildHome_model_1.buildHome,
    }),
    (0, common_1.Controller)('build-home'),
    (0, swagger_1.ApiTags)('配置'),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(buildHome_model_1.buildHome)),
    __metadata("design:paramtypes", [typeof (_c = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _c : Object])
], BuildHomeController);
exports.BuildHomeController = BuildHomeController;


/***/ }),

/***/ "./apps/admin/src/build-home/build-home.module.ts":
/*!********************************************************!*\
  !*** ./apps/admin/src/build-home/build-home.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BuildHomeModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const build_home_controller_1 = __webpack_require__(/*! ./build-home.controller */ "./apps/admin/src/build-home/build-home.controller.ts");
let BuildHomeModule = class BuildHomeModule {
};
BuildHomeModule = __decorate([
    (0, common_1.Module)({
        controllers: [build_home_controller_1.BuildHomeController]
    })
], BuildHomeModule);
exports.BuildHomeModule = BuildHomeModule;


/***/ }),

/***/ "./apps/admin/src/commodity-class/commodity-class.controller.ts":
/*!**********************************************************************!*\
  !*** ./apps/admin/src/commodity-class/commodity-class.controller.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommodityClassController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const commodityClass_model_1 = __webpack_require__(/*! libs/db/models/commodityClass.model */ "./libs/db/src/models/commodityClass.model.ts");
const nestjs_mongoose_crud_1 = __webpack_require__(/*! nestjs-mongoose-crud */ "nestjs-mongoose-crud");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
const Class_dto_1 = __webpack_require__(/*! ../auth/dto/Class.dto */ "./apps/admin/src/auth/dto/Class.dto.ts");
const updata_dto_1 = __webpack_require__(/*! ../auth/dto/updata.dto */ "./apps/admin/src/auth/dto/updata.dto.ts");
let CommodityClassController = class CommodityClassController {
    constructor(model) {
        this.model = model;
    }
    async add(dto) {
        const { title, parent, children } = dto;
        if (title == '' || !title) {
            throw new common_1.BadRequestException('分类名为空');
        }
        const res = await this.model.findOne({ title });
        if (!res) {
            const Class = await this.model.create({
                title,
                parent,
                children,
            });
            return Class;
        }
        else {
            throw new common_1.BadRequestException('用户名已注册');
        }
    }
    async update1(id, dto) {
        const { title, parent } = dto;
        if (title == '' || !title) {
            throw new common_1.BadRequestException('分类名为空');
        }
        const res = await this.model.findOne({ title });
        const Id = await this.model.findById(id);
        if (!res || res._id == id) {
            if (!parent || parent == '') {
                const Class = await this.model.updateOne({ _id: id }, {
                    title: title,
                    $unset: {
                        parent: '',
                    },
                });
                return Class;
            }
            else {
                const Class = await this.model.updateOne({ _id: id }, {
                    title: title,
                    $set: {
                        parent: parent,
                    },
                });
                return Class;
            }
        }
        else {
            throw new common_1.BadRequestException('用户名已存在');
        }
    }
};
__decorate([
    (0, common_1.Post)('addClass'),
    (0, swagger_1.ApiOperation)({ summary: '添加分类' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof Class_dto_1.ClassDto !== "undefined" && Class_dto_1.ClassDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], CommodityClassController.prototype, "add", null);
__decorate([
    (0, common_1.Post)('/updata/:id'),
    (0, swagger_1.ApiOperation)({ summary: '修改父类为空用的' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof updata_dto_1.updataDto !== "undefined" && updata_dto_1.updataDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CommodityClassController.prototype, "update1", null);
CommodityClassController = __decorate([
    (0, nestjs_mongoose_crud_1.Crud)({
        model: commodityClass_model_1.CommodityClass,
        routes: {
            find: {
                populate: [{ path: 'children', populate: 'children' }],
            },
        },
    }),
    (0, common_1.Controller)('commodity-class'),
    (0, swagger_1.ApiTags)('商品分类'),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(commodityClass_model_1.CommodityClass)),
    __metadata("design:paramtypes", [typeof (_c = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _c : Object])
], CommodityClassController);
exports.CommodityClassController = CommodityClassController;


/***/ }),

/***/ "./apps/admin/src/commodity-class/commodity-class.module.ts":
/*!******************************************************************!*\
  !*** ./apps/admin/src/commodity-class/commodity-class.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommodityClassModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commodity_class_controller_1 = __webpack_require__(/*! ./commodity-class.controller */ "./apps/admin/src/commodity-class/commodity-class.controller.ts");
const commodity_class_service_1 = __webpack_require__(/*! ./commodity-class.service */ "./apps/admin/src/commodity-class/commodity-class.service.ts");
let CommodityClassModule = class CommodityClassModule {
};
CommodityClassModule = __decorate([
    (0, common_1.Module)({
        controllers: [commodity_class_controller_1.CommodityClassController],
        providers: [commodity_class_service_1.CommodityClassService]
    })
], CommodityClassModule);
exports.CommodityClassModule = CommodityClassModule;


/***/ }),

/***/ "./apps/admin/src/commodity-class/commodity-class.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/admin/src/commodity-class/commodity-class.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommodityClassService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CommodityClassService = class CommodityClassService {
};
CommodityClassService = __decorate([
    (0, common_1.Injectable)()
], CommodityClassService);
exports.CommodityClassService = CommodityClassService;


/***/ }),

/***/ "./apps/admin/src/commoditys/commoditys.controller.ts":
/*!************************************************************!*\
  !*** ./apps/admin/src/commoditys/commoditys.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommoditysController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const commodity_model_1 = __webpack_require__(/*! libs/db/models/commodity.model */ "./libs/db/src/models/commodity.model.ts");
const nestjs_mongoose_crud_1 = __webpack_require__(/*! nestjs-mongoose-crud */ "nestjs-mongoose-crud");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
const shops_service_1 = __webpack_require__(/*! ../shops/shops.service */ "./apps/admin/src/shops/shops.service.ts");
let CommoditysController = class CommoditysController {
    constructor(model, ShopsService) {
        this.model = model;
        this.ShopsService = ShopsService;
    }
    async getGoods(id) {
        const res = await this.ShopsService.MODEL.find({ user: id });
        let SShop = [];
        SShop = res.map((v) => ({
            id: v._id,
            title: v.title,
        }));
        return SShop;
    }
};
__decorate([
    (0, common_1.Post)('/Goods/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'user下查询店铺' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommoditysController.prototype, "getGoods", null);
CommoditysController = __decorate([
    (0, nestjs_mongoose_crud_1.Crud)({
        model: commodity_model_1.Commodity,
        routes: {
            find: {
                populate: ['shop', 'title'],
            },
            create: {},
            findOne: {},
        },
    }),
    (0, common_1.Controller)('commoditys'),
    (0, swagger_1.ApiTags)('商品'),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(commodity_model_1.Commodity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object, typeof (_b = typeof shops_service_1.ShopsService !== "undefined" && shops_service_1.ShopsService) === "function" ? _b : Object])
], CommoditysController);
exports.CommoditysController = CommoditysController;


/***/ }),

/***/ "./apps/admin/src/commoditys/commoditys.module.ts":
/*!********************************************************!*\
  !*** ./apps/admin/src/commoditys/commoditys.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommoditysModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const shops_service_1 = __webpack_require__(/*! ../shops/shops.service */ "./apps/admin/src/shops/shops.service.ts");
const commoditys_controller_1 = __webpack_require__(/*! ./commoditys.controller */ "./apps/admin/src/commoditys/commoditys.controller.ts");
const commoditys_service_1 = __webpack_require__(/*! ./commoditys.service */ "./apps/admin/src/commoditys/commoditys.service.ts");
let CommoditysModule = class CommoditysModule {
};
CommoditysModule = __decorate([
    (0, common_1.Module)({
        imports: [shops_service_1.ShopsService],
        controllers: [commoditys_controller_1.CommoditysController],
        providers: [commoditys_service_1.CommoditysService, shops_service_1.ShopsService],
        exports: [shops_service_1.ShopsService],
    })
], CommoditysModule);
exports.CommoditysModule = CommoditysModule;


/***/ }),

/***/ "./apps/admin/src/commoditys/commoditys.service.ts":
/*!*********************************************************!*\
  !*** ./apps/admin/src/commoditys/commoditys.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommoditysService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CommoditysService = class CommoditysService {
};
CommoditysService = __decorate([
    (0, common_1.Injectable)()
], CommoditysService);
exports.CommoditysService = CommoditysService;


/***/ }),

/***/ "./apps/admin/src/components/components.controller.ts":
/*!************************************************************!*\
  !*** ./apps/admin/src/components/components.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComponentsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const components_model_1 = __webpack_require__(/*! libs/db/models/components.model */ "./libs/db/src/models/components.model.ts");
const nestjs_mongoose_crud_1 = __webpack_require__(/*! nestjs-mongoose-crud */ "nestjs-mongoose-crud");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
let ComponentsController = class ComponentsController {
    constructor(model) {
        this.model = model;
    }
};
ComponentsController = __decorate([
    (0, nestjs_mongoose_crud_1.Crud)({
        model: components_model_1.Components,
    }),
    (0, common_1.Controller)('components'),
    (0, swagger_1.ApiTags)('组件'),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(components_model_1.Components)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object])
], ComponentsController);
exports.ComponentsController = ComponentsController;


/***/ }),

/***/ "./apps/admin/src/components/components.module.ts":
/*!********************************************************!*\
  !*** ./apps/admin/src/components/components.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComponentsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const components_controller_1 = __webpack_require__(/*! ./components.controller */ "./apps/admin/src/components/components.controller.ts");
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [components_controller_1.ComponentsController],
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;


/***/ }),

/***/ "./apps/admin/src/orders/orders.controller.ts":
/*!****************************************************!*\
  !*** ./apps/admin/src/orders/orders.controller.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let OrdersController = class OrdersController {
};
OrdersController = __decorate([
    (0, common_1.Controller)('orders')
], OrdersController);
exports.OrdersController = OrdersController;


/***/ }),

/***/ "./apps/admin/src/orders/orders.module.ts":
/*!************************************************!*\
  !*** ./apps/admin/src/orders/orders.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const orders_controller_1 = __webpack_require__(/*! ./orders.controller */ "./apps/admin/src/orders/orders.controller.ts");
let OrdersModule = class OrdersModule {
};
OrdersModule = __decorate([
    (0, common_1.Module)({
        controllers: [orders_controller_1.OrdersController]
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;


/***/ }),

/***/ "./apps/admin/src/promiss/promiss.controller.ts":
/*!******************************************************!*\
  !*** ./apps/admin/src/promiss/promiss.controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PromissController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const promiss_model_1 = __webpack_require__(/*! libs/db/models/promiss.model */ "./libs/db/src/models/promiss.model.ts");
const nestjs_mongoose_crud_1 = __webpack_require__(/*! nestjs-mongoose-crud */ "nestjs-mongoose-crud");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
let PromissController = class PromissController {
    constructor(model) {
        this.model = model;
    }
};
PromissController = __decorate([
    (0, nestjs_mongoose_crud_1.Crud)({
        model: promiss_model_1.Promiss,
    }),
    (0, common_1.Controller)('promiss'),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(promiss_model_1.Promiss)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object])
], PromissController);
exports.PromissController = PromissController;


/***/ }),

/***/ "./apps/admin/src/promiss/promiss.module.ts":
/*!**************************************************!*\
  !*** ./apps/admin/src/promiss/promiss.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PromissModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const promiss_controller_1 = __webpack_require__(/*! ./promiss.controller */ "./apps/admin/src/promiss/promiss.controller.ts");
const promiss_service_1 = __webpack_require__(/*! ./promiss.service */ "./apps/admin/src/promiss/promiss.service.ts");
let PromissModule = class PromissModule {
};
PromissModule = __decorate([
    (0, common_1.Module)({
        controllers: [promiss_controller_1.PromissController],
        providers: [promiss_service_1.PromissService]
    })
], PromissModule);
exports.PromissModule = PromissModule;


/***/ }),

/***/ "./apps/admin/src/promiss/promiss.service.ts":
/*!***************************************************!*\
  !*** ./apps/admin/src/promiss/promiss.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PromissService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PromissService = class PromissService {
};
PromissService = __decorate([
    (0, common_1.Injectable)()
], PromissService);
exports.PromissService = PromissService;


/***/ }),

/***/ "./apps/admin/src/shops/shops.controller.ts":
/*!**************************************************!*\
  !*** ./apps/admin/src/shops/shops.controller.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const shop_model_1 = __webpack_require__(/*! libs/db/models/shop.model */ "./libs/db/src/models/shop.model.ts");
const nestjs_mongoose_crud_1 = __webpack_require__(/*! nestjs-mongoose-crud */ "nestjs-mongoose-crud");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
const current_user_1 = __webpack_require__(/*! ../auth/current-user */ "./apps/admin/src/auth/current-user.ts");
const shop_dto_1 = __webpack_require__(/*! ../auth/dto/shop.dto */ "./apps/admin/src/auth/dto/shop.dto.ts");
let ShopsController = class ShopsController {
    constructor(model) {
        this.model = model;
    }
    async add(dto, uid) {
        const { title, user, description, images, address, phone, components } = dto;
        if (title == '' || user == '' || !title || !user) {
            throw new common_1.BadRequestException('用户名或者店铺名为空');
        }
        const res = await this.model.findOne({ title });
        if (!res) {
            const shop = await this.model.create({
                title,
                user,
                description,
                images,
                address,
                phone,
            });
            return shop;
        }
        else {
            throw new common_1.BadRequestException('商铺名已注册');
        }
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('addShop'),
    (0, swagger_1.ApiOperation)({ summary: '新增店铺' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_1.CurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof shop_dto_1.ShopDto !== "undefined" && shop_dto_1.ShopDto) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "add", null);
ShopsController = __decorate([
    (0, nestjs_mongoose_crud_1.Crud)({
        model: shop_model_1.Shop,
        routes: {
            find: {
                populate: 'user',
            },
            create: {},
            findOne: {},
        },
    }),
    (0, common_1.Controller)('shops'),
    (0, swagger_1.ApiTags)('商铺'),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(shop_model_1.Shop)),
    __metadata("design:paramtypes", [typeof (_b = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _b : Object])
], ShopsController);
exports.ShopsController = ShopsController;


/***/ }),

/***/ "./apps/admin/src/shops/shops.module.ts":
/*!**********************************************!*\
  !*** ./apps/admin/src/shops/shops.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const shops_controller_1 = __webpack_require__(/*! ./shops.controller */ "./apps/admin/src/shops/shops.controller.ts");
const shops_service_1 = __webpack_require__(/*! ./shops.service */ "./apps/admin/src/shops/shops.service.ts");
let ShopsModule = class ShopsModule {
};
ShopsModule = __decorate([
    (0, common_1.Module)({
        controllers: [shops_controller_1.ShopsController],
        providers: [shops_service_1.ShopsService],
        exports: [shops_service_1.ShopsService],
    })
], ShopsModule);
exports.ShopsModule = ShopsModule;


/***/ }),

/***/ "./apps/admin/src/shops/shops.service.ts":
/*!***********************************************!*\
  !*** ./apps/admin/src/shops/shops.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const shop_model_1 = __webpack_require__(/*! libs/db/models/shop.model */ "./libs/db/src/models/shop.model.ts");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
let ShopsService = class ShopsService {
    constructor(model) {
        this.model = model;
        this.MODEL = this.model;
    }
};
ShopsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(shop_model_1.Shop)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object])
], ShopsService);
exports.ShopsService = ShopsService;


/***/ }),

/***/ "./apps/admin/src/users/users.controller.ts":
/*!**************************************************!*\
  !*** ./apps/admin/src/users/users.controller.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const user_model_1 = __webpack_require__(/*! libs/db/models/user.model */ "./libs/db/src/models/user.model.ts");
const nestjs_mongoose_crud_1 = __webpack_require__(/*! nestjs-mongoose-crud */ "nestjs-mongoose-crud");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
const register_dto_1 = __webpack_require__(/*! ../auth/dto/register.dto */ "./apps/admin/src/auth/dto/register.dto.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/admin/src/users/users.service.ts");
let UsersController = class UsersController {
    constructor(model, Service) {
        this.model = model;
        this.Service = Service;
    }
    async add(dto) {
        const { username, password, role, state } = dto;
        if (username == '' || password == '' || !username || !password) {
            throw new common_1.BadRequestException('用户名或者密码为空');
        }
        const res = await this.model.findOne({ username });
        if (!res) {
            const user = await this.model.create({
                username,
                password,
                role,
                state,
            });
            return user;
        }
        else {
            throw new common_1.BadRequestException('用户名已注册');
        }
    }
};
__decorate([
    (0, common_1.Post)('add'),
    (0, swagger_1.ApiOperation)({ summary: '注册' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "add", null);
UsersController = __decorate([
    (0, nestjs_mongoose_crud_1.Crud)({
        model: user_model_1.User,
    }),
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('用户'),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [typeof (_b = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _b : Object, typeof (_c = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _c : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./apps/admin/src/users/users.module.ts":
/*!**********************************************!*\
  !*** ./apps/admin/src/users/users.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./apps/admin/src/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/admin/src/users/users.service.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/admin/src/users/users.service.ts":
/*!***********************************************!*\
  !*** ./apps/admin/src/users/users.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const user_model_1 = __webpack_require__(/*! libs/db/models/user.model */ "./libs/db/src/models/user.model.ts");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
let UsersService = class UsersService {
    constructor(model) {
        this.model = model;
    }
    async create(model) {
        const data = await this.model.create(model);
        return data;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "./libs/common/src/common.module.ts":
/*!******************************************!*\
  !*** ./libs/common/src/common.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_service_1 = __webpack_require__(/*! ./common.service */ "./libs/common/src/common.service.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            jwt_1.JwtModule.registerAsync({
                useFactory() {
                    return {
                        secret: process.env.SECRET,
                    };
                },
            }),
        ],
        providers: [common_service_1.CommonService],
        exports: [common_service_1.CommonService, jwt_1.JwtModule],
    })
], CommonModule);
exports.CommonModule = CommonModule;


/***/ }),

/***/ "./libs/common/src/common.service.ts":
/*!*******************************************!*\
  !*** ./libs/common/src/common.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CommonService = class CommonService {
};
CommonService = __decorate([
    (0, common_1.Injectable)()
], CommonService);
exports.CommonService = CommonService;


/***/ }),

/***/ "./libs/common/src/index.ts":
/*!**********************************!*\
  !*** ./libs/common/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./common.module */ "./libs/common/src/common.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./common.service */ "./libs/common/src/common.service.ts"), exports);


/***/ }),

/***/ "./libs/db/src/db.module.ts":
/*!**********************************!*\
  !*** ./libs/db/src/db.module.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const db_service_1 = __webpack_require__(/*! ./db.service */ "./libs/db/src/db.service.ts");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
const model_list_1 = __webpack_require__(/*! ./model-list */ "./libs/db/src/model-list.ts");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
(0, typegoose_1.setGlobalOptions)({
    schemaOptions: {
        timestamps: true,
        toJSON: { virtuals: true, getters: true },
        toObject: { virtuals: true },
    },
});
const model = nestjs_typegoose_next_1.TypegooseModule.forFeature(model_list_1.models);
let DbModule = class DbModule {
};
DbModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            nestjs_typegoose_next_1.TypegooseModule.forRootAsync({
                useFactory() {
                    return {
                        uri: 'mongodb://localhost/blogs',
                    };
                },
            }),
            model,
        ],
        providers: [db_service_1.DbService],
        exports: [db_service_1.DbService, model],
    })
], DbModule);
exports.DbModule = DbModule;


/***/ }),

/***/ "./libs/db/src/db.service.ts":
/*!***********************************!*\
  !*** ./libs/db/src/db.service.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let DbService = class DbService {
};
DbService = __decorate([
    (0, common_1.Injectable)()
], DbService);
exports.DbService = DbService;


/***/ }),

/***/ "./libs/db/src/index.ts":
/*!******************************!*\
  !*** ./libs/db/src/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./db.module */ "./libs/db/src/db.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./db.service */ "./libs/db/src/db.service.ts"), exports);


/***/ }),

/***/ "./libs/db/src/model-list.ts":
/*!***********************************!*\
  !*** ./libs/db/src/model-list.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.models = void 0;
const action_model_1 = __webpack_require__(/*! ./models/action.model */ "./libs/db/src/models/action.model.ts");
const buildHome_model_1 = __webpack_require__(/*! ./models/buildHome.model */ "./libs/db/src/models/buildHome.model.ts");
const commodity_model_1 = __webpack_require__(/*! ./models/commodity.model */ "./libs/db/src/models/commodity.model.ts");
const commodityClass_model_1 = __webpack_require__(/*! ./models/commodityClass.model */ "./libs/db/src/models/commodityClass.model.ts");
const components_model_1 = __webpack_require__(/*! ./models/components.model */ "./libs/db/src/models/components.model.ts");
const order_model_1 = __webpack_require__(/*! ./models/order.model */ "./libs/db/src/models/order.model.ts");
const promiss_model_1 = __webpack_require__(/*! ./models/promiss.model */ "./libs/db/src/models/promiss.model.ts");
const shop_model_1 = __webpack_require__(/*! ./models/shop.model */ "./libs/db/src/models/shop.model.ts");
const shoppingCart_model_1 = __webpack_require__(/*! ./models/shoppingCart.model */ "./libs/db/src/models/shoppingCart.model.ts");
const user_model_1 = __webpack_require__(/*! ./models/user.model */ "./libs/db/src/models/user.model.ts");
const userInfo_model_1 = __webpack_require__(/*! ./models/userInfo.model */ "./libs/db/src/models/userInfo.model.ts");
exports.models = [
    commodity_model_1.Commodity,
    commodityClass_model_1.CommodityClass,
    order_model_1.Order,
    user_model_1.User,
    shop_model_1.Shop,
    promiss_model_1.Promiss,
    shoppingCart_model_1.ShoppingCart,
    userInfo_model_1.UserInfo,
    action_model_1.Action,
    components_model_1.Components,
    buildHome_model_1.buildHome,
];


/***/ }),

/***/ "./libs/db/src/models/action.model.ts":
/*!********************************************!*\
  !*** ./libs/db/src/models/action.model.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Action = exports.Types = exports.Actions = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
var Actions;
(function (Actions) {
    Actions["LIKE"] = "like";
})(Actions = exports.Actions || (exports.Actions = {}));
var Types;
(function (Types) {
    Types["Commodity"] = "Commodity";
    Types["SHOP"] = "Shop";
})(Types = exports.Types || (exports.Types = {}));
class Action {
}
__decorate([
    (0, typegoose_1.prop)({ ref: 'User' }),
    (0, swagger_1.ApiProperty)({ description: '用户' }),
    __metadata("design:type", typeof (_a = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _a : Object)
], Action.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({ enum: Actions }),
    (0, swagger_1.ApiProperty)({ description: '操作类型' }),
    __metadata("design:type", String)
], Action.prototype, "action", void 0);
__decorate([
    (0, typegoose_1.prop)({ enum: Types }),
    (0, swagger_1.ApiProperty)({ description: '模型' }),
    __metadata("design:type", String)
], Action.prototype, "type", void 0);
__decorate([
    (0, typegoose_1.prop)({ refPath: 'type' }),
    (0, swagger_1.ApiProperty)({ description: '目标' }),
    __metadata("design:type", typeof (_b = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _b : Object)
], Action.prototype, "object", void 0);
exports.Action = Action;


/***/ }),

/***/ "./libs/db/src/models/buildHome.model.ts":
/*!***********************************************!*\
  !*** ./libs/db/src/models/buildHome.model.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildHome = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
class buildHome {
}
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '名称' }),
    __metadata("design:type", String)
], buildHome.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '组件' }),
    __metadata("design:type", Array)
], buildHome.prototype, "components", void 0);
exports.buildHome = buildHome;


/***/ }),

/***/ "./libs/db/src/models/commodity.model.ts":
/*!***********************************************!*\
  !*** ./libs/db/src/models/commodity.model.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Commodity = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
let Commodity = class Commodity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: '商品名', example: '商品名' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Commodity.prototype, "commodityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '商品介绍', example: '默认' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Commodity.prototype, "commodityIntroduce", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '图片' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], Commodity.prototype, "image", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: 'CommodityClass' }),
    (0, swagger_1.ApiProperty)({ description: '关联的分类表', example: 'class_id' }),
    __metadata("design:type", typeof (_a = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _a : Object)
], Commodity.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: {} }),
    (0, swagger_1.ApiProperty)({ description: '商品的参数', example: '{}' }),
    __metadata("design:type", typeof (_b = typeof Object !== "undefined" && Object) === "function" ? _b : Object)
], Commodity.prototype, "parameter", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '商品数量', example: 0 }),
    __metadata("design:type", Number)
], Commodity.prototype, "commodityNum", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '商品价格', example: 0 }),
    __metadata("design:type", Number)
], Commodity.prototype, "price", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: 'Shop' }),
    (0, swagger_1.ApiProperty)({ description: '所属店铺' }),
    __metadata("design:type", typeof (_c = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _c : Object)
], Commodity.prototype, "shop", void 0);
Commodity = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
        },
    })
], Commodity);
exports.Commodity = Commodity;


/***/ }),

/***/ "./libs/db/src/models/commodityClass.model.ts":
/*!****************************************************!*\
  !*** ./libs/db/src/models/commodityClass.model.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommodityClass = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
class CommodityClass {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '分类名' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], CommodityClass.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '上级' }),
    (0, typegoose_1.prop)({
        ref: 'CommodityClass',
    }),
    __metadata("design:type", typeof (_a = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _a : Object)
], CommodityClass.prototype, "parent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '下级' }),
    (0, typegoose_1.prop)({
        ref: 'CommodityClass',
        localField: '_id',
        foreignField: 'parent',
    }),
    __metadata("design:type", typeof (_b = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _b : Object)
], CommodityClass.prototype, "children", void 0);
exports.CommodityClass = CommodityClass;


/***/ }),

/***/ "./libs/db/src/models/components.model.ts":
/*!************************************************!*\
  !*** ./libs/db/src/models/components.model.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Components = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
class Components {
}
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '名称' }),
    __metadata("design:type", String)
], Components.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: {} }),
    (0, swagger_1.ApiProperty)({ description: '配置文件' }),
    __metadata("design:type", Object)
], Components.prototype, "config", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: {} }),
    (0, swagger_1.ApiProperty)({ description: '内容' }),
    __metadata("design:type", Object)
], Components.prototype, "content", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: {} }),
    (0, swagger_1.ApiProperty)({ description: '类型' }),
    __metadata("design:type", Object)
], Components.prototype, "type", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '标题' }),
    __metadata("design:type", String)
], Components.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: {} }),
    (0, swagger_1.ApiProperty)({ description: '类型' }),
    __metadata("design:type", String)
], Components.prototype, "key", void 0);
exports.Components = Components;


/***/ }),

/***/ "./libs/db/src/models/order.model.ts":
/*!*******************************************!*\
  !*** ./libs/db/src/models/order.model.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Order_1, _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Order = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
let Order = Order_1 = class Order {
    static async getUserOrder(uid) {
        const orderModel = (0, typegoose_1.getModelForClass)(Order_1);
        const res = await orderModel.find({ user: { $in: uid } });
        return res;
    }
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: '绑定用户' }),
    (0, typegoose_1.prop)({ ref: 'User' }),
    __metadata("design:type", typeof (_a = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _a : Object)
], Order.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '绑定商品' }),
    (0, typegoose_1.prop)({ ref: 'Commodity' }),
    __metadata("design:type", typeof (_b = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _b : Object)
], Order.prototype, "commodity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '订单数量' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], Order.prototype, "goodsNum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '发货地址' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Order.prototype, "goodsAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '收货地址' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Order.prototype, "consigneeAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '收货人姓名' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Order.prototype, "consigneeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '收货人联系电话' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Order.prototype, "consigneeTel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '备注' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Order.prototype, "remarks", void 0);
Order = Order_1 = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
        },
    })
], Order);
exports.Order = Order;


/***/ }),

/***/ "./libs/db/src/models/promiss.model.ts":
/*!*********************************************!*\
  !*** ./libs/db/src/models/promiss.model.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Promiss = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
class Promiss {
}
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '权限' }),
    __metadata("design:type", String)
], Promiss.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '分类' }),
    __metadata("design:type", String)
], Promiss.prototype, "category", void 0);
exports.Promiss = Promiss;


/***/ }),

/***/ "./libs/db/src/models/shop.model.ts":
/*!******************************************!*\
  !*** ./libs/db/src/models/shop.model.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Shop = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
let Shop = class Shop {
};
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '商铺名称' }),
    __metadata("design:type", String)
], Shop.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: 'User' }),
    (0, swagger_1.ApiProperty)({ description: '所属用户名' }),
    __metadata("design:type", typeof (_a = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _a : Object)
], Shop.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '商铺简介' }),
    __metadata("design:type", String)
], Shop.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '商铺图片' }),
    __metadata("design:type", String)
], Shop.prototype, "images", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '商铺地址' }),
    __metadata("design:type", String)
], Shop.prototype, "address", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '商铺电话' }),
    __metadata("design:type", String)
], Shop.prototype, "phone", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    (0, swagger_1.ApiProperty)({ description: '组件' }),
    __metadata("design:type", Array)
], Shop.prototype, "components", void 0);
Shop = __decorate([
    (0, typegoose_1.index)({ title: 1 })
], Shop);
exports.Shop = Shop;


/***/ }),

/***/ "./libs/db/src/models/shoppingCart.model.ts":
/*!**************************************************!*\
  !*** ./libs/db/src/models/shoppingCart.model.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShoppingCart = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
let ShoppingCart = class ShoppingCart {
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: '绑定用户' }),
    (0, typegoose_1.prop)({ ref: 'User' }),
    __metadata("design:type", typeof (_a = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _a : Object)
], ShoppingCart.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '绑定商品' }),
    (0, typegoose_1.prop)({ ref: 'Commodity' }),
    __metadata("design:type", typeof (_b = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _b : Object)
], ShoppingCart.prototype, "commodity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '加入购物车数量' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], ShoppingCart.prototype, "goodsNum", void 0);
ShoppingCart = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
        },
    })
], ShoppingCart);
exports.ShoppingCart = ShoppingCart;


/***/ }),

/***/ "./libs/db/src/models/user.model.ts":
/*!******************************************!*\
  !*** ./libs/db/src/models/user.model.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = exports.roles = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const bcryptjs_1 = __webpack_require__(/*! bcryptjs */ "bcryptjs");
var roles;
(function (roles) {
    roles["ADMIN"] = "admin";
    roles["USER"] = "user";
})(roles = exports.roles || (exports.roles = {}));
class User {
    get STATE() {
        if (this.state == true) {
            return '启用';
        }
        else
            return '禁用';
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '用户名', example: 'user' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '密码', example: 'pass' }),
    (0, typegoose_1.prop)({
        get(val) {
            return val;
        },
        set(val) {
            return val ? (0, bcryptjs_1.hashSync)(val) : val;
        },
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '身份', example: 'user' }),
    (0, typegoose_1.prop)({ enum: roles }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '状态', example: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Boolean)
], User.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '用户头像' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '权限' }),
    (0, typegoose_1.prop)({ ref: 'Promiss' }),
    __metadata("design:type", Array)
], User.prototype, "promiss", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '收藏' }),
    (0, swagger_1.ApiProperty)({ description: '绑定商品' }),
    (0, typegoose_1.prop)({ ref: 'Commodity' }),
    __metadata("design:type", Array)
], User.prototype, "commodity", void 0);
exports.User = User;


/***/ }),

/***/ "./libs/db/src/models/userInfo.model.ts":
/*!**********************************************!*\
  !*** ./libs/db/src/models/userInfo.model.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserInfo = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
class UserInfo {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '收货人' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '省份' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserInfo.prototype, "province", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '城市' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserInfo.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '区县' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserInfo.prototype, "county", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '地址' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserInfo.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '电话' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserInfo.prototype, "tel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '邮政编码' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserInfo.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '默认地址' }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Boolean)
], UserInfo.prototype, "isDefault", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '绑定用户' }),
    (0, typegoose_1.prop)({ ref: 'User' }),
    __metadata("design:type", typeof (_a = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _a : Object)
], UserInfo.prototype, "user", void 0);
exports.UserInfo = UserInfo;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@typegoose/typegoose":
/*!***************************************!*\
  !*** external "@typegoose/typegoose" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@typegoose/typegoose");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "multer-aliyun-oss":
/*!************************************!*\
  !*** external "multer-aliyun-oss" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("multer-aliyun-oss");

/***/ }),

/***/ "nestjs-mongoose-crud":
/*!***************************************!*\
  !*** external "nestjs-mongoose-crud" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("nestjs-mongoose-crud");

/***/ }),

/***/ "nestjs-typegoose-next":
/*!****************************************!*\
  !*** external "nestjs-typegoose-next" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("nestjs-typegoose-next");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./apps/admin/src/main.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const admin_module_1 = __webpack_require__(/*! ./admin.module */ "./apps/admin/src/admin.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(admin_module_1.AdminModule);
    app.enableCors();
    app.setGlobalPrefix('/admin/api');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('电商API')
        .setDescription('供后端使用的API文档')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('cats')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    const PROT = process.env.ADMIN_PROT;
    await app.listen(PROT);
    console.log(`http://localhost:${PROT}/api-docs/`);
}
bootstrap();

})();

/******/ })()
;