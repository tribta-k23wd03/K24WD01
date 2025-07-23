"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
let users = [];
let nextId = 1;
function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            try {
                resolve(JSON.parse(body));
            }
            catch (err) {
                reject(err);
            }
        });
    });
}
const server = (0, http_1.createServer)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    // CORS & setup headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
        res.writeHead(204); // empty data
        res.end;
        return;
    }
    // ROUTE: GET/USERS getall users
    if (req.method === "GET" && req.url === "/users") {
        res.writeHead(200);
        res.end(JSON.stringify(users));
        return;
    }
    // ROUTE: POST/USER create new user
    if (req.method === "POST" && req.url === "/users") {
        try {
            const data = yield parseBody(req);
            const newUser = {
                id: nextId++,
                name: data.name,
                email: data.email,
            };
            users.push(newUser);
            res.writeHead(201);
            res.end(JSON.stringify(newUser));
        }
        catch (error) {
            res.writeHead(400);
            res.end(JSON.stringify({ message: "Invalid JSON" }));
        }
        return;
    }
    // ROUTE: PUT/USER edit existing user
    // validation (user?true:false)
    if (req.method === "PUT" && ((_a = req.url) === null || _a === void 0 ? void 0 : _a.startsWith("/users/"))) {
        const id = Number(req.url.split("/")[2]); // Number
        try {
            const data = yield parseBody(req);
            const user = users.find((u) => u.id === id);
            if (!user) {
                res.writeHead(404);
                res.end(JSON.stringify({ message: "User Not Found" }));
                return;
            }
            user.name = data.name || user.name;
            user.email = data.email || user.email;
            res.writeHead(200);
            res.end(JSON.stringify(user));
        }
        catch (error) {
            res.writeHead(400);
            res.end(JSON.stringify({ message: "Invalid JSON" }));
        }
        return;
    }
    // ROUTE: DELETE/USER delete existing user
    // validation (user?true:false)
    if (req.method === "DELETE" && ((_b = req.url) === null || _b === void 0 ? void 0 : _b.startsWith("/users/"))) {
        const id = Number(req.url.split("/")[2]);
        const index = users.findIndex((u) => u.id === id);
        if (index === -1) {
            res.writeHead(404);
            res.end(JSON.stringify({ message: "User Not Found" }));
            return;
        }
        users.splice(index, 1);
        res.writeHead(204);
        res.end();
        return;
    }
}));
// localhost: PORT
server.listen(9999, () => {
    console.log("Server is running at http://localhost:9999");
});
