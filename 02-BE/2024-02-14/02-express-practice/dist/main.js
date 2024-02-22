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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const promises_1 = __importDefault(require("fs/promises"));
const uuid_1 = require("uuid");
const posts_json_1 = __importDefault(require("./data/posts.json"));
const app = (0, express_1.default)();
const port = 5555;
const jsonParser = body_parser_1.default.json();
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    console.log(req.body);
    res.send("hiiiiiiii");
});
app.get("/posts", (req, res) => {
    res.json(posts_json_1.default);
});
app.get("/posts/:postId", (req, res) => {
    const postId = req.params.postId;
    const post = posts_json_1.default.find((post) => post.id === Number(postId));
    res.json(post);
});
app.post("/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, body } = req.body;
    const posts = yield promises_1.default
        .readFile("./src/data/posts.json", {
        encoding: "utf-8",
    })
        .then((text) => JSON.parse(text));
    const newPost = {
        id: (0, uuid_1.v4)(),
        userId: 1,
        title,
        body,
    };
    posts.push(newPost);
    const stringifyNewPosts = JSON.stringify(posts);
    const result = yield promises_1.default.writeFile("./src/data/posts.json", stringifyNewPosts, {
        encoding: "utf-8",
    });
    console.log(result);
    res.send(req.body);
}));
app.delete("/posts/:postId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, body } = req.body;
    let postId = req.params.postId;
    postId = isNaN(Number(postId)) ? postId : Number(postId);
    const posts = yield promises_1.default
        .readFile("./srcc/data/posts.json", {
        encoding: "utf-8",
    })
        .then((text) => JSON.parse(text));
    posts.forEach((post) => {
        if (post.id === postId) {
            post.title = title;
            post.body = body;
        }
    });
    const stringifyNewPosts = JSON.stringify(posts);
    yield promises_1.default.writeFile("./src/data/posts.json", stringifyNewPosts, {
        encoding: "utf-8",
    });
    res.send(postId);
}));
app.put("/posts/:postId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let postId = req.params.postId;
    postId = isNaN(Number(postId)) ? postId : Number(postId);
    const posts = yield promises_1.default
        .readFile("./srcc/data/posts.json", {
        encoding: "utf-8",
    })
        .then((text) => JSON.parse(text));
    const newPosts = posts.filter((post) => post.id !== postId);
    const stringifyNewPosts = JSON.stringify(newPosts);
    yield promises_1.default.writeFile("./src/data/posts.json", stringifyNewPosts, {
        encoding: "utf-8",
    });
    res.send(postId);
}));
app.get("/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get("https://jsonplaceholder.typicode.com/todos");
    const data = response.data;
    res.json(data);
}));
app.listen(port, () => {
    console.log("서버 open");
});
