/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(4);
const common_module_1 = __webpack_require__(5);
const auth_module_1 = __webpack_require__(9);
const app_controller_1 = __webpack_require__(22);
const app_service_1 = __webpack_require__(24);
const users_module_1 = __webpack_require__(25);
const db_1 = __webpack_require__(29);
const platform_express_1 = __webpack_require__(23);
const orders_module_1 = __webpack_require__(41);
const shops_module_1 = __webpack_require__(43);
const commodity_class_module_1 = __webpack_require__(48);
const commoditys_module_1 = __webpack_require__(53);
const shopping_cart_controller_1 = __webpack_require__(56);
const shopping_cart_module_1 = __webpack_require__(58);
const action_module_1 = __webpack_require__(59);
const action_service_1 = __webpack_require__(61);
const user_info_module_1 = __webpack_require__(62);
const MAO = __webpack_require__(65);
let AppModule = class AppModule {
};
AppModule = __decorate([
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
            auth_module_1.AuthModule,
            common_module_1.CommonModule,
            users_module_1.UsersModule,
            db_1.DbModule,
            commoditys_module_1.CommoditysModule,
            commodity_class_module_1.CommodityClassModule,
            shops_module_1.ShopsModule,
            orders_module_1.OrdersModule,
            shopping_cart_module_1.ShoppingCartModule,
            action_module_1.ActionModule,
            user_info_module_1.UserInfoModule,
        ],
        controllers: [app_controller_1.AppController, shopping_cart_controller_1.ShoppingCartController],
        providers: [app_service_1.AppService, action_service_1.ActionService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonModule = void 0;
const common_1 = __webpack_require__(4);
const common_service_1 = __webpack_require__(6);
const jwt_1 = __webpack_require__(7);
const config_1 = __webpack_require__(8);
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
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonService = void 0;
const common_1 = __webpack_require__(4);
let CommonService = class CommonService {
};
CommonService = __decorate([
    (0, common_1.Injectable)()
], CommonService);
exports.CommonService = CommonService;


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(4);
const passport_1 = __webpack_require__(10);
const auth_controller_1 = __webpack_require__(11);
const jwt_strategy_1 = __webpack_require__(18);
const local_strategy_1 = __webpack_require__(20);
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
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 11 */
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
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(7);
const passport_1 = __webpack_require__(10);
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
const user_model_1 = __webpack_require__(13);
const nestjs_typegoose_next_1 = __webpack_require__(15);
const login_dto_1 = __webpack_require__(16);
const register_dto_1 = __webpack_require__(17);
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
                role: '2',
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
        return req.user;
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
    __param(1, (0, nestjs_typegoose_next_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object, typeof (_d = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _d : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@typegoose/typegoose");

/***/ }),
/* 13 */
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
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
const bcryptjs_1 = __webpack_require__(14);
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
/* 14 */
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("nestjs-typegoose-next");

/***/ }),
/* 16 */
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
const swagger_1 = __webpack_require__(2);
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
/* 17 */
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
exports.RegisterDto = void 0;
const swagger_1 = __webpack_require__(2);
class RegisterDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
exports.RegisterDto = RegisterDto;


/***/ }),
/* 18 */
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
const passport_1 = __webpack_require__(10);
const nestjs_typegoose_next_1 = __webpack_require__(15);
const passport_jwt_1 = __webpack_require__(19);
const typegoose_1 = __webpack_require__(12);
const user_model_1 = __webpack_require__(13);
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
/* 19 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 20 */
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
const passport_1 = __webpack_require__(10);
const nestjs_typegoose_next_1 = __webpack_require__(15);
const passport_local_1 = __webpack_require__(21);
const common_1 = __webpack_require__(4);
const typegoose_1 = __webpack_require__(12);
const bcryptjs_1 = __webpack_require__(14);
const user_model_1 = __webpack_require__(13);
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'local') {
    constructor(userModel) {
        super({
            usernameField: 'username',
            passwordField: 'password',
        });
        this.userModel = userModel;
    }
    async validate(username, password) {
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
/* 21 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 22 */
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
exports.AppController = void 0;
const common_1 = __webpack_require__(4);
const platform_express_1 = __webpack_require__(23);
const app_service_1 = __webpack_require__(24);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async upload(file) {
        return file;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)('file')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "upload", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(4);
let AppService = class AppService {
    getHello() {
        return 'Hello World!server';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(4);
const users_controller_1 = __webpack_require__(26);
const users_service_1 = __webpack_require__(28);
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
/* 26 */
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
exports.UsersController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
const user_model_1 = __webpack_require__(13);
const nestjs_mongoose_crud_1 = __webpack_require__(27);
const nestjs_typegoose_next_1 = __webpack_require__(15);
let UsersController = class UsersController {
    constructor(model) {
        this.model = model;
    }
};
UsersController = __decorate([
    (0, nestjs_mongoose_crud_1.Crud)({
        model: user_model_1.User,
        routes: {
            find: {
                populate: ['commodity'],
            },
        },
    }),
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('web用户'),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("nestjs-mongoose-crud");

/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(4);
let UsersService = class UsersService {
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;


/***/ }),
/* 29 */
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
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbModule = void 0;
const common_1 = __webpack_require__(4);
const db_service_1 = __webpack_require__(31);
const nestjs_typegoose_next_1 = __webpack_require__(15);
const model_list_1 = __webpack_require__(32);
const typegoose_1 = __webpack_require__(12);
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
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbService = void 0;
const common_1 = __webpack_require__(4);
let DbService = class DbService {
};
DbService = __decorate([
    (0, common_1.Injectable)()
], DbService);
exports.DbService = DbService;


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.models = void 0;
const action_model_1 = __webpack_require__(33);
const commodity_model_1 = __webpack_require__(34);
const commodityClass_model_1 = __webpack_require__(35);
const order_model_1 = __webpack_require__(36);
const promiss_model_1 = __webpack_require__(37);
const shop_model_1 = __webpack_require__(38);
const shoppingCart_model_1 = __webpack_require__(39);
const user_model_1 = __webpack_require__(13);
const userInfo_model_1 = __webpack_require__(40);
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
];


/***/ }),
/* 33 */
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
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
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
/* 34 */
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
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
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
/* 35 */
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
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
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
/* 36 */
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
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
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
/* 37 */
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
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
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
/* 38 */
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
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
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
/* 39 */
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
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
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
/* 40 */
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
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
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
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersModule = void 0;
const common_1 = __webpack_require__(4);
const orders_controller_1 = __webpack_require__(42);
let OrdersModule = class OrdersModule {
};
OrdersModule = __decorate([
    (0, common_1.Module)({
        controllers: [orders_controller_1.OrdersController]
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;


/***/ }),
/* 42 */
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
exports.OrdersController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
const order_model_1 = __webpack_require__(36);
const nestjs_mongoose_crud_1 = __webpack_require__(27);
const nestjs_typegoose_next_1 = __webpack_require__(15);
let OrdersController = class OrdersController {
    constructor(model) {
        this.model = model;
    }
};
OrdersController = __decorate([
    (0, nestjs_mongoose_crud_1.Crud)({
        model: order_model_1.Order,
        routes: {
            find: {
                populate: ['user', 'commodity'],
            },
            create: {},
            findOne: {},
        },
    }),
    (0, common_1.Controller)('orders'),
    (0, swagger_1.ApiTags)('订单'),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(order_model_1.Order)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object])
], OrdersController);
exports.OrdersController = OrdersController;


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopsModule = void 0;
const common_1 = __webpack_require__(4);
const shops_controller_1 = __webpack_require__(44);
const shops_service_1 = __webpack_require__(47);
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
/* 44 */
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
const common_1 = __webpack_require__(4);
const passport_1 = __webpack_require__(10);
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
const shop_model_1 = __webpack_require__(38);
const nestjs_mongoose_crud_1 = __webpack_require__(27);
const nestjs_typegoose_next_1 = __webpack_require__(15);
const current_user_1 = __webpack_require__(45);
const shop_dto_1 = __webpack_require__(46);
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
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUserId = exports.CurrentUser = void 0;
const common_1 = __webpack_require__(4);
exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    return context.switchToHttp().getRequest().user;
});
exports.CurrentUserId = (0, common_1.createParamDecorator)((data, context) => {
    var _a;
    return (_a = context.switchToHttp().getRequest().user) === null || _a === void 0 ? void 0 : _a._id;
});


/***/ }),
/* 46 */
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
const swagger_1 = __webpack_require__(2);
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
/* 47 */
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
const common_1 = __webpack_require__(4);
const typegoose_1 = __webpack_require__(12);
const shop_model_1 = __webpack_require__(38);
const nestjs_typegoose_next_1 = __webpack_require__(15);
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
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommodityClassModule = void 0;
const common_1 = __webpack_require__(4);
const commodity_class_controller_1 = __webpack_require__(49);
const commodity_class_service_1 = __webpack_require__(52);
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
/* 49 */
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
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
const commodityClass_model_1 = __webpack_require__(35);
const nestjs_mongoose_crud_1 = __webpack_require__(27);
const nestjs_typegoose_next_1 = __webpack_require__(15);
const Class_dto_1 = __webpack_require__(50);
const updata_dto_1 = __webpack_require__(51);
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
/* 50 */
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
const swagger_1 = __webpack_require__(2);
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
/* 51 */
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
const swagger_1 = __webpack_require__(2);
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
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommodityClassService = void 0;
const common_1 = __webpack_require__(4);
let CommodityClassService = class CommodityClassService {
};
CommodityClassService = __decorate([
    (0, common_1.Injectable)()
], CommodityClassService);
exports.CommodityClassService = CommodityClassService;


/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommoditysModule = void 0;
const common_1 = __webpack_require__(4);
const shops_service_1 = __webpack_require__(47);
const commoditys_controller_1 = __webpack_require__(54);
const commoditys_service_1 = __webpack_require__(55);
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
/* 54 */
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
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
const commodity_model_1 = __webpack_require__(34);
const nestjs_mongoose_crud_1 = __webpack_require__(27);
const nestjs_typegoose_next_1 = __webpack_require__(15);
const shops_service_1 = __webpack_require__(47);
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
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommoditysService = void 0;
const common_1 = __webpack_require__(4);
let CommoditysService = class CommoditysService {
};
CommoditysService = __decorate([
    (0, common_1.Injectable)()
], CommoditysService);
exports.CommoditysService = CommoditysService;


/***/ }),
/* 56 */
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
exports.ShoppingCartController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
const shoppingCart_model_1 = __webpack_require__(39);
const nestjs_mongoose_crud_1 = __webpack_require__(27);
const nestjs_typegoose_next_1 = __webpack_require__(15);
const auth_decorator_1 = __webpack_require__(57);
const current_user_1 = __webpack_require__(45);
let ShoppingCartController = class ShoppingCartController {
    constructor(model) {
        this.model = model;
    }
    async addCart(body, uid) {
        const temp = await this.model.find({
            user: uid,
            commodity: body.commodity,
        });
        if (temp.length != 0) {
            const num = temp[0].goodsNum + body.goodsNum;
            const res = await this.model.updateOne({ _id: temp[0].id }, {
                goodsNum: num,
            });
        }
        else {
            const res = await this.model.create({
                user: uid,
                commodity: body.commodity,
                goodsNum: body.goodsNum,
            });
        }
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '添加商品到购物车' }),
    (0, common_1.Post)('addCart'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_1.CurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "addCart", null);
ShoppingCartController = __decorate([
    (0, nestjs_mongoose_crud_1.Crud)({
        model: shoppingCart_model_1.ShoppingCart,
        routes: {
            find: {
                populate: ['user', 'commodity'],
            },
            create: {},
            findOne: {},
        },
    }),
    (0, common_1.Controller)('shopping-cart'),
    (0, swagger_1.ApiTags)('购物车'),
    (0, auth_decorator_1.JwtAuth)(),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(shoppingCart_model_1.ShoppingCart)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object])
], ShoppingCartController);
exports.ShoppingCartController = ShoppingCartController;


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuth = void 0;
const common_1 = __webpack_require__(4);
const passport_1 = __webpack_require__(10);
const JwtAuth = () => (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'));
exports.JwtAuth = JwtAuth;


/***/ }),
/* 58 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShoppingCartModule = void 0;
const common_1 = __webpack_require__(4);
let ShoppingCartModule = class ShoppingCartModule {
};
ShoppingCartModule = __decorate([
    (0, common_1.Module)({})
], ShoppingCartModule);
exports.ShoppingCartModule = ShoppingCartModule;


/***/ }),
/* 59 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionModule = void 0;
const common_1 = __webpack_require__(4);
const action_controller_1 = __webpack_require__(60);
const action_service_1 = __webpack_require__(61);
let ActionModule = class ActionModule {
};
ActionModule = __decorate([
    (0, common_1.Module)({
        controllers: [action_controller_1.ActionController],
        providers: [action_service_1.ActionService],
    })
], ActionModule);
exports.ActionModule = ActionModule;


/***/ }),
/* 60 */
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
exports.ActionController = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(2);
const typegoose_1 = __webpack_require__(12);
const action_model_1 = __webpack_require__(33);
const nestjs_typegoose_next_1 = __webpack_require__(15);
const auth_decorator_1 = __webpack_require__(57);
const current_user_1 = __webpack_require__(45);
const action_service_1 = __webpack_require__(61);
const commodity_model_1 = __webpack_require__(34);
let ActionController = class ActionController {
    constructor(model, service, CommodityModel) {
        this.model = model;
        this.service = service;
        this.CommodityModel = CommodityModel;
    }
    async collect(userid, type, objectId, action) {
        const res = await this.service.collect(userid, action, type, objectId);
        return res;
    }
    async getCollect(userid, type, objectId, action) {
        const res = await this.service.getCollect(userid, action, type, objectId);
        return res;
    }
    async getMyCollect(userid, action) {
        const res = await this.service.getMyAction(userid, action);
        return res;
    }
    async search23(body, userid, action) {
        let returnRes = [];
        const res = await this.service.getMyAction(userid, action);
        const goodModel = (0, typegoose_1.getModelForClass)(commodity_model_1.Commodity);
        const res1 = await goodModel.find({
            commodityName: { $regex: body.commodityName },
        });
        for (let i in res) {
            for (let k in res1) {
                if (res[i].object.commodityName === res1[k].commodityName) {
                    returnRes.push(res[i]);
                }
            }
        }
        return returnRes;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '收藏' }),
    (0, common_1.Get)('collect/:type/:objectId/:action'),
    __param(0, (0, current_user_1.CurrentUserId)()),
    __param(1, (0, common_1.Param)('type')),
    __param(2, (0, common_1.Param)('objectId')),
    __param(3, (0, common_1.Param)('action')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ActionController.prototype, "collect", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '收藏' }),
    (0, common_1.Get)('getCollect/:type/:objectId/:action'),
    __param(0, (0, current_user_1.CurrentUserId)()),
    __param(1, (0, common_1.Param)('type')),
    __param(2, (0, common_1.Param)('objectId')),
    __param(3, (0, common_1.Param)('action')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ActionController.prototype, "getCollect", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '获取操作' }),
    (0, common_1.Get)('getMyAction/:action'),
    __param(0, (0, current_user_1.CurrentUserId)()),
    __param(1, (0, common_1.Param)('action')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ActionController.prototype, "getMyCollect", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '搜索' }),
    (0, common_1.Post)('searchMyAction/:action'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_1.CurrentUserId)()),
    __param(2, (0, common_1.Param)('action')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ActionController.prototype, "search23", null);
ActionController = __decorate([
    (0, swagger_1.ApiTags)('操作'),
    (0, common_1.Controller)('action'),
    (0, auth_decorator_1.JwtAuth)(),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(action_model_1.Action)),
    __param(2, (0, nestjs_typegoose_next_1.InjectModel)(commodity_model_1.Commodity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object, typeof (_b = typeof action_service_1.ActionService !== "undefined" && action_service_1.ActionService) === "function" ? _b : Object, typeof (_c = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _c : Object])
], ActionController);
exports.ActionController = ActionController;


/***/ }),
/* 61 */
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
exports.ActionService = void 0;
const common_1 = __webpack_require__(4);
const typegoose_1 = __webpack_require__(12);
const action_model_1 = __webpack_require__(33);
const nestjs_typegoose_next_1 = __webpack_require__(15);
let ActionService = class ActionService {
    constructor(model) {
        this.model = model;
    }
    async collect(userid, action, type, objectid) {
        const collect = await this.model.findOne({
            user: userid,
            action,
            type,
            object: objectid,
        });
        if (collect) {
            await this.model.findByIdAndDelete({ _id: collect._id });
            return false;
        }
        await this.model.create({
            user: userid,
            action,
            type,
            object: objectid,
        });
        return true;
    }
    async getCollect(userid, action, type, objectid) {
        const collect = await this.model.findOne({
            user: userid,
            action,
            type,
            object: objectid,
        });
        if (collect) {
            return true;
        }
        return false;
    }
    async getMyAction(uid, action) {
        const res = await this.model
            .find({ user: uid, action })
            .populate('object')
            .sort({ _id: -1 });
        return res;
    }
};
ActionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(action_model_1.Action)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object])
], ActionService);
exports.ActionService = ActionService;


/***/ }),
/* 62 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserInfoModule = void 0;
const common_1 = __webpack_require__(4);
const user_info_controller_1 = __webpack_require__(63);
let UserInfoModule = class UserInfoModule {
};
UserInfoModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_info_controller_1.UserInfoController]
    })
], UserInfoModule);
exports.UserInfoModule = UserInfoModule;


/***/ }),
/* 63 */
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
exports.UserInfoController = void 0;
const common_1 = __webpack_require__(4);
const typegoose_1 = __webpack_require__(12);
const userInfo_model_1 = __webpack_require__(40);
const nestjs_typegoose_next_1 = __webpack_require__(15);
const nestjs_mongoose_crud_1 = __webpack_require__(27);
const swagger_1 = __webpack_require__(2);
const current_user_1 = __webpack_require__(45);
const info_dto_1 = __webpack_require__(64);
const auth_decorator_1 = __webpack_require__(57);
let UserInfoController = class UserInfoController {
    constructor(model) {
        this.model = model;
    }
    async create(userid, body) {
        const { name, province, city, county, address, tel, postalCode, isDefault, } = body;
        if (!name || name === '')
            throw new common_1.BadRequestException('姓名为空');
        if (!address || address === '')
            throw new common_1.BadRequestException('地址为空');
        if (!tel || tel === '')
            throw new common_1.BadRequestException('联系电话为空');
        if (isDefault == true) {
            const changeIs = await this.model.find({
                isDefault: isDefault,
                user: userid,
            });
            for (let i in changeIs) {
                const iid = changeIs[i]._id;
                const info1 = await this.model.updateOne({ _id: iid }, {
                    isDefault: false,
                });
            }
        }
        const mo = {
            name,
            province,
            city,
            county,
            address,
            tel,
            postalCode,
            isDefault,
            user: userid,
        };
        const res = await this.model.create(mo);
        return res;
    }
    async updated(id, body, userid) {
        const res = await this.model.findById({ _id: id });
        if (res) {
            const { name, province, city, county, address, tel, postalCode, isDefault, } = body;
            if (name === '')
                throw new common_1.BadRequestException('姓名为空');
            if (address === '')
                throw new common_1.BadRequestException('地址为空');
            if (tel === '')
                throw new common_1.BadRequestException('联系电话为空');
            if (isDefault == true) {
                const changeIs = await this.model.find({
                    isDefault: isDefault,
                    user: userid,
                });
                for (let i in changeIs) {
                    const iid = changeIs[i]._id;
                    const info1 = await this.model.updateOne({ _id: iid }, {
                        isDefault: false,
                    });
                }
            }
            const info = await this.model.updateOne({ _id: id }, body);
        }
        else
            throw new common_1.BadRequestException('请刷新重新尝试~');
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '新增信息' }),
    (0, common_1.Post)(),
    (0, auth_decorator_1.JwtAuth)(),
    __param(0, (0, current_user_1.CurrentUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof info_dto_1.info !== "undefined" && info_dto_1.info) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], UserInfoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: '修改信息' }),
    (0, auth_decorator_1.JwtAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_1.CurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof info_dto_1.info !== "undefined" && info_dto_1.info) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], UserInfoController.prototype, "updated", null);
UserInfoController = __decorate([
    (0, nestjs_mongoose_crud_1.Crud)({
        model: userInfo_model_1.UserInfo,
    }),
    (0, common_1.Controller)('user-info'),
    (0, swagger_1.ApiTags)('用户信息'),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(userInfo_model_1.UserInfo)),
    __metadata("design:paramtypes", [typeof (_c = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _c : Object])
], UserInfoController);
exports.UserInfoController = UserInfoController;


/***/ }),
/* 64 */
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
exports.info = void 0;
const swagger_1 = __webpack_require__(2);
class info {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '收货人' }),
    __metadata("design:type", String)
], info.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '省份' }),
    __metadata("design:type", String)
], info.prototype, "province", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '城市' }),
    __metadata("design:type", String)
], info.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '区县' }),
    __metadata("design:type", String)
], info.prototype, "county", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '地址' }),
    __metadata("design:type", String)
], info.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '电话' }),
    __metadata("design:type", String)
], info.prototype, "tel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '邮政编码' }),
    __metadata("design:type", String)
], info.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '默认地址' }),
    __metadata("design:type", Boolean)
], info.prototype, "isDefault", void 0);
exports.info = info;


/***/ }),
/* 65 */
/***/ ((module) => {

module.exports = require("multer-aliyun-oss");

/***/ })
/******/ 	]);
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

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('/server/api');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('后台管理API')
        .setDescription('API文档')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('cats')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    const PROT = process.env.APP_PROT;
    await app.listen(PROT);
    console.log(`http://localhost:${PROT}/api-docs`);
}
bootstrap();

})();

/******/ })()
;