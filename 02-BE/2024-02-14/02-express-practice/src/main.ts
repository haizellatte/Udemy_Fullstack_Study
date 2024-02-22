import axios from "axios";
import bodyParser from "body-parser";
import express from "express";
import fs from "fs/promises";
import { v4 as uuid } from "uuid";

import posts from "./data/posts.json";

const app = express();
const port = 5555;
const jsonParser = bodyParser.json();

app.use(bodyParser.json());

type Post = {
  id: number | string;
  userId: number;
  title: string;
  body: string;
};

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("hiiiiiiii");
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:postId", (req, res) => {
  const postId = req.params.postId;
  const post = posts.find((post) => post.id === Number(postId));

  res.json(post);
});

app.post("/posts", async (req, res) => {
  const { title, body } = req.body;
  const posts = await fs
    .readFile("./src/data/posts.json", {
      encoding: "utf-8",
    })
    .then((text) => JSON.parse(text));

  const newPost = {
    id: uuid(),
    userId: 1,
    title,
    body,
  };

  posts.push(newPost);

  const stringifyNewPosts = JSON.stringify(posts);

  const result = await fs.writeFile(
    "./src/data/posts.json",
    stringifyNewPosts,
    {
      encoding: "utf-8",
    }
  );

  console.log(result);
  res.send(req.body);
});

app.delete("/posts/:postId", async (req, res) => {
  const { title, body } = req.body;
  let postId: string | number = req.params.postId;
  postId = isNaN(Number(postId)) ? postId : Number(postId);
  const posts = await fs
    .readFile("./srcc/data/posts.json", {
      encoding: "utf-8",
    })
    .then((text) => JSON.parse(text) as Post[]);

  posts.forEach((post) => {
    if (post.id === postId) {
      post.title = title;
      post.body = body;
    }
  });

  const stringifyNewPosts = JSON.stringify(posts);

  await fs.writeFile("./src/data/posts.json", stringifyNewPosts, {
    encoding: "utf-8",
  });

  res.send(postId);
});

app.put("/posts/:postId", async (req, res) => {
  let postId: string | number = req.params.postId;
  postId = isNaN(Number(postId)) ? postId : Number(postId);
  const posts = await fs
    .readFile("./srcc/data/posts.json", {
      encoding: "utf-8",
    })
    .then((text) => JSON.parse(text) as Post[]);

  const newPosts = posts.filter((post) => post.id !== postId);

  const stringifyNewPosts = JSON.stringify(newPosts);

  await fs.writeFile("./src/data/posts.json", stringifyNewPosts, {
    encoding: "utf-8",
  });

  res.send(postId);
});

app.get("/todos", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const data = response.data;

  res.json(data);
});

app.listen(port, () => {
  console.log("서버 open");
});
