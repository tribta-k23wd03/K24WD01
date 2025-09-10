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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const chat_service_1 = require("./chat.service");
const auth_ms_client_1 = require("../auth.ms.client");
const url_1 = require("url");
const constants_1 = require("../constants");
const rxjs_1 = require("rxjs");
const uuid_1 = require("uuid");
let ChatGateway = class ChatGateway {
    chat;
    auth;
    metas = new WeakMap();
    constructor(chat, auth) {
        this.chat = chat;
        this.auth = auth;
    }
    async handleConnection(client, req) {
        const u = new url_1.URL(req.url, 'http://localhost');
        const name = (u.searchParams.get('name') || 'guest').substring(0, 32);
        const token = u.searchParams.get('token') || '';
        const meta = { name };
        if (constants_1.REQUIRE_AUTH && token) {
            try {
                const payload = await (0, rxjs_1.firstValueFrom)(this.auth.sendVerify(token));
                ((meta.userId = payload.sub), (meta.email = payload.email));
            }
            catch {
                client.close(1008, 'Invalid Token');
                return;
            }
        }
        else if (constants_1.REQUIRE_AUTH && token) {
            client.close(1008, 'Invalid Token');
            return;
        }
        this.metas.set(client, meta);
        client.send(JSON.stringify({ type: 'hello', you: meta, recent: this.chat.recent() }));
        client.on('message', (buf) => {
            const text = (typeof buf === 'string' ? buf : buf.toString()).trim();
            if (!text)
                return;
            const m = {
                id: (0, uuid_1.v4)(),
                text,
                at: Date.now(),
                from: meta.userId ? meta.email || meta.name : meta.name,
            };
            this.chat.add(m);
            this.broadcast({ type: 'chat.new', msg: m });
        });
    }
    handleDisconnect(client) {
        this.metas.delete(client);
    }
    broadcast(data) {
        const s = JSON.stringify(data);
        this.server.clients.forEach((c) => {
            if (c.readyState === 1)
                c.send(s);
        });
    }
};
exports.ChatGateway = ChatGateway;
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ path: '/chat' }),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        auth_ms_client_1.AuthMsClient])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map