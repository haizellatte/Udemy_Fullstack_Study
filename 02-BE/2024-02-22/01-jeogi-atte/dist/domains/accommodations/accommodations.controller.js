"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccommodationsController = void 0;
const common_1 = require("@nestjs/common");
const partner_decorator_1 = require("../../decorators/partner.decorator");
const private_decorator_1 = require("../../decorators/private.decorator");
const accommodations_service_1 = require("./accommodations.service");
let AccommodationsController = class AccommodationsController {
    constructor(accommodationsService) {
        this.accommodationsService = accommodationsService;
    }
    resisterAccommodation(partner, dto) {
        return this.accommodationsService.createAccommodation({
            ...dto,
            partnerId: partner.id,
        });
    }
    getAccommodations() {
        return this.accommodationsService.getAccommodations();
    }
    getAccommodation(accommodationId) {
        return this.accommodationsService.getAccommodation(accommodationId);
    }
};
exports.AccommodationsController = AccommodationsController;
__decorate([
    (0, common_1.Post)(),
    (0, private_decorator_1.Private)('partner'),
    __param(0, (0, partner_decorator_1.DPartner)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AccommodationsController.prototype, "resisterAccommodation", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AccommodationsController.prototype, "getAccommodations", null);
__decorate([
    (0, common_1.Get)(':accommodationId'),
    __param(0, (0, common_1.Param)('accommodationId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AccommodationsController.prototype, "getAccommodation", null);
exports.AccommodationsController = AccommodationsController = __decorate([
    (0, common_1.Controller)('accommodations'),
    __metadata("design:paramtypes", [accommodations_service_1.AccommodationsService])
], AccommodationsController);
//# sourceMappingURL=accommodations.controller.js.map