"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
exports.jwtConfig = {
    secret: 'process.env.JWT_SECRET_KEY',
    signOptions: { expiresIn: '50m' },
};
//# sourceMappingURL=jwt.config.js.map