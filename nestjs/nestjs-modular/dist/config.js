"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('config', () => ({
    database: {
        name: process.env.DATABASE_NAME,
        port: process.env.DATABASE_PORT,
    },
    aipKey: process.env.API_KEY,
}));
//# sourceMappingURL=config.js.map