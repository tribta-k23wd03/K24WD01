"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const constants_1 = require("./constants");
const platform_ws_1 = require("@nestjs/platform-ws");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.useWebSocketAdapter(new platform_ws_1.WsAdapter(app));
    await app.listen(constants_1.CHAT_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map