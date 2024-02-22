import { Router } from "express";
import todosService from "./todos.service";

const todosController = Router();

todosController.get("/", todosService.getTodos);
todosController.post("/", todosService.postTodo);
todosController.delete("/:todoId", todosService.deleteTodo);
todosController.put("/:todoId", todosService.updateTodo);

export default todosController;
