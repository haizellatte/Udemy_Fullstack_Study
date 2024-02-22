"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Private = void 0;
const common_1 = require("@nestjs/common");
const Private = (accountType) => (0, common_1.SetMetadata)('accountType', accountType);
exports.Private = Private;
//# sourceMappingURL=private.decorator.js.map