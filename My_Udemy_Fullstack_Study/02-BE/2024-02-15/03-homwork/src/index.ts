import { Router } from "express";
// import authController from "./domain/auth/version1[메모리]/auth.controller";
import authController from "./domain/auth/version2[파일Json]/auth.controller";
import todosController from "./domain/todos/todos.controller";

const controllers = Router();

controllers.use("/auth", authController);
controllers.use("/todos", todosController);

export default controllers;
