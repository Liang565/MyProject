/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/server/src/app.controller.ts":
/*!*******************************************!*\
  !*** ./apps/server/src/app.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/server/src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/server/src/app.module.ts":
/*!***************************************!*\
  !*** ./apps/server/src/app.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_module_1 = __webpack_require__(/*! libs/common/common.module */ "./libs/common/src/common.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/server/src/auth/auth.module.ts");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/server/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/server/src/app.service.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./apps/server/src/users/users.module.ts");
const db_1 = __webpack_require__(/*! libs/db */ "./libs/db/src/index.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, common_module_1.CommonModule, users_module_1.UsersModule, db_1.DbModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/server/src/app.service.ts":
/*!****************************************!*\
  !*** ./apps/server/src/app.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
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

/***/ "./apps/server/src/auth/auth.controller.ts":
/*!*************************************************!*\
  !*** ./apps/server/src/auth/auth.controller.ts ***!
  \*************************************************/
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
const login_dto_1 = __webpack_require__(/*! ./dto/login.dto */ "./apps/server/src/auth/dto/login.dto.ts");
const register_dto_1 = __webpack_require__(/*! ./dto/register.dto */ "./apps/server/src/auth/dto/register.dto.ts");
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

/***/ "./apps/server/src/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./apps/server/src/auth/auth.module.ts ***!
  \*********************************************/
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
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/server/src/auth/auth.controller.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./apps/server/src/auth/jwt.strategy.ts");
const local_strategy_1 = __webpack_require__(/*! ./local.strategy */ "./apps/server/src/auth/local.strategy.ts");
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

/***/ "./apps/server/src/auth/dto/login.dto.ts":
/*!***********************************************!*\
  !*** ./apps/server/src/auth/dto/login.dto.ts ***!
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

/***/ "./apps/server/src/auth/dto/register.dto.ts":
/*!**************************************************!*\
  !*** ./apps/server/src/auth/dto/register.dto.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
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

/***/ "./apps/server/src/auth/jwt.strategy.ts":
/*!**********************************************!*\
  !*** ./apps/server/src/auth/jwt.strategy.ts ***!
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
            secretOrKey: 'sifhgioaehgbb',
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

/***/ "./apps/server/src/auth/local.strategy.ts":
/*!************************************************!*\
  !*** ./apps/server/src/auth/local.strategy.ts ***!
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

/***/ "./apps/server/src/users/users.controller.ts":
/*!***************************************************!*\
  !*** ./apps/server/src/users/users.controller.ts ***!
  \***************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const user_model_1 = __webpack_require__(/*! libs/db/models/user.model */ "./libs/db/src/models/user.model.ts");
const nestjs_mongoose_crud_1 = __webpack_require__(/*! nestjs-mongoose-crud */ "nestjs-mongoose-crud");
const nestjs_typegoose_next_1 = __webpack_require__(/*! nestjs-typegoose-next */ "nestjs-typegoose-next");
let UsersController = class UsersController {
    constructor(model) {
        this.model = model;
    }
};
UsersController = __decorate([
    (0, nestjs_mongoose_crud_1.Crud)({
        model: user_model_1.User,
    }),
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('web用户'),
    __param(0, (0, nestjs_typegoose_next_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typegoose_1.ReturnModelType !== "undefined" && typegoose_1.ReturnModelType) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./apps/server/src/users/users.module.ts":
/*!***********************************************!*\
  !*** ./apps/server/src/users/users.module.ts ***!
  \***********************************************/
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
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./apps/server/src/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/server/src/users/users.service.ts");
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

/***/ "./apps/server/src/users/users.service.ts":
/*!************************************************!*\
  !*** ./apps/server/src/users/users.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UsersService = class UsersService {
};
UsersService = __decorate([
    (0, common_1.Injectable)()
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
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                useFactory() {
                    return {
                        secret: 'sifhgioaehgbb',
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
const commodity_model_1 = __webpack_require__(/*! ./models/commodity.model */ "./libs/db/src/models/commodity.model.ts");
const commodityClass_model_1 = __webpack_require__(/*! ./models/commodityClass.model */ "./libs/db/src/models/commodityClass.model.ts");
const order_model_1 = __webpack_require__(/*! ./models/order.model */ "./libs/db/src/models/order.model.ts");
const shop_model_1 = __webpack_require__(/*! ./models/shop.model */ "./libs/db/src/models/shop.model.ts");
const sopping_model_1 = __webpack_require__(/*! ./models/sopping.model */ "./libs/db/src/models/sopping.model.ts");
const user_model_1 = __webpack_require__(/*! ./models/user.model */ "./libs/db/src/models/user.model.ts");
exports.models = [commodity_model_1.Commodity, commodityClass_model_1.CommodityClass, order_model_1.Order, sopping_model_1.Sopping, user_model_1.User, shop_model_1.Shop];


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Order = void 0;
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
class Order {
}
__decorate([
    (0, typegoose_1.prop)({ ref: 'User' }),
    __metadata("design:type", typeof (_a = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _a : Object)
], Order.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: 'Sopping' }),
    __metadata("design:type", typeof (_b = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _b : Object)
], Order.prototype, "sopping", void 0);
exports.Order = Order;


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
class Shop {
}
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
exports.Shop = Shop;


/***/ }),

/***/ "./libs/db/src/models/sopping.model.ts":
/*!*********************************************!*\
  !*** ./libs/db/src/models/sopping.model.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sopping = void 0;
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
class Sopping {
}
__decorate([
    (0, typegoose_1.prop)({ ref: 'User' }),
    __metadata("design:type", typeof (_a = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _a : Object)
], Sopping.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: 'commodity' }),
    __metadata("design:type", typeof (_b = typeof typegoose_1.Ref !== "undefined" && typegoose_1.Ref) === "function" ? _b : Object)
], Sopping.prototype, "commoId", void 0);
exports.Sopping = Sopping;


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
    roles["ADMIN"] = "1";
    roles["USER"] = "2";
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
        select: false,
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
    (0, swagger_1.ApiProperty)({ description: '身份', example: '2' }),
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
exports.User = User;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

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
/*!*********************************!*\
  !*** ./apps/server/src/main.ts ***!
  \*********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/server/src/app.module.ts");
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
    await app.listen(3002);
    console.log('server:http://localhost:3002/api-docs');
}
bootstrap();

})();

/******/ })()
;