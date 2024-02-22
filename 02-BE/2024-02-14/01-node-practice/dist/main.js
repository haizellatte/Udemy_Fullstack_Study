"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    res.statusCode = 201;
    console.log(req.url);
    res.write("hello");
    res.end();
});
server.listen(5555, "localhost", () => {
    console.log("서버 켜짐...5555 포트에....짜잔....");
});
