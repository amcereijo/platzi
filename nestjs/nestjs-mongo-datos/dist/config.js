"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT,
        },
        mongo: {
            dbName: process.env.MONGO_DB,
            user: process.env.MONGO_INITDB_ROOT_USERNAME,
            password: process.env.MONGO_INITDB_ROOT_PASSWORD,
            port: parseInt(process.env.MONGO_PORT, 10),
            host: process.env.MONGO_HOST,
            connection: process.env.MONGO_CONNECTION,
        },
        apiKey: process.env.API_KEY,
    };
});
//# sourceMappingURL=config.js.map