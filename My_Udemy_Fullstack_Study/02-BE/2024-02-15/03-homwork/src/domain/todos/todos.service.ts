import axios from "axios";
import { Request, Response } from "express";
import fs from "fs/promises";
import { v4 as uuid } from "uuid";
import responseJwtVerify from "../../config/jwtVerify";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export type TodoType = {
  id: number | string;
  userId: number;
  title: string;
  completed: boolean;
};

//todo : read 1 --> 다른 server에서 get해오는 경우
// const getTodos = async (req: Request, res: Response) => {
//   const { data } = await client.get("/");

//   res.json(data);
// };

//todo : read 2 --> 폴더 내 파일에서 get해오는 경우
const getTodos = async (req: Request, res: Response) => {
  const todos = await fs
    .readFile("./src/data/todos.data.json", {
      encoding: "utf-8",
    })
    .then((text) => JSON.parse(text));

  res.json(todos);
};

//todo : create
const postTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
  const id = responseJwtVerify(req);

  const todos = await fs
    .readFile("./src/data/todos.data.json", {
      encoding: "utf-8",
    })
    .then((text) => JSON.parse(text));

  const newTodo = {
    userId: id,
    id: uuid(),
    title,
    completed: false,
  };

  todos.push(newTodo);
  const stringifiedNewTodos = JSON.stringify(todos);

  const result = await fs.writeFile(
    "./src/data/todos.data.json",
    stringifiedNewTodos,
    {
      encoding: "utf-8",
    }
  );

  res.json("todo가 추가되었습니다.");
};

//todo : delete
const deleteTodo = async (req: Request, res: Response) => {
  let todoId: string | number = req.params.todoId;
  todoId = isNaN(Number(todoId)) ? todoId : Number(todoId);

  const todos = await fs
    .readFile("./src/data/todos.data.json", {
      encoding: "utf-8",
    })
    .then((text) => JSON.parse(text) as TodoType[]);

  const newTodos = todos.filter((todo) => todo.id !== todoId);
  const stringifiedNewTodos = JSON.stringify(newTodos);

  await fs.writeFile("./src/data/todos.data.json", stringifiedNewTodos, {
    encoding: "utf-8",
  });

  res.json("투두가 삭제되었습니다.");
};

//todo : update
const updateTodo = async (req: Request, res: Response) => {
  let todoId: string | number = req.params.todoId;
  todoId = isNaN(Number(todoId)) ? todoId : Number(todoId);
  const { title } = req.body;

  const todos = await fs
    .readFile("./src/data/todos.data.json", {
      encoding: "utf-8",
    })
    .then((text) => JSON.parse(text) as TodoType[]);

  todos.forEach((todo) => {
    if (todo.id === todoId) {
      todo.title = title;
    }
  });

  const stringifiedNewTodos = JSON.stringify(todos);

  await fs.writeFile("./src/data/todos.data.json", stringifiedNewTodos, {
    encoding: "utf-8",
  });

  res.send("투두가 수정되었습니다.");
};

const todosService = {
  getTodos,
  deleteTodo,
  postTodo,
  updateTodo,
};

export default todosService;
