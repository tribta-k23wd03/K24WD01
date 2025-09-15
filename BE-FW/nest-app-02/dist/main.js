"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const constants_1 = require("./constants");
const common_1 = require("@nestjs/common");
require("@nestjs/microservices");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'DELETE', 'POST'],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true }));
    app.connectMicroservice({
        transport: microservices_1.Transport.TCP,
        options: { host: constants_1.AUTH_MS_HOST, port: constants_1.AUTH_MS_PORT },
    });
    await app.startAllMicroservices();
    await app.listen(constants_1.APP_PORT);
    common_1.Logger.log(`TCP microservice listening on tcp://${constants_1.AUTH_MS_HOST}:${constants_1.AUTH_MS_PORT}`, `Bootstrap`);
    common_1.Logger.log(`HTTP server listening on http://localhost:${constants_1.APP_PORT}`, `Bootstrap`);
}
bootstrap();
//# sourceMappingURL=main.js.map