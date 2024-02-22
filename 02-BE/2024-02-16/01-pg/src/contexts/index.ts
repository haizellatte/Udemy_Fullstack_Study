import { Router } from "express";
import postController from "./posts.context/posts.controller";

const controllers = Router();

controllers.use("/post", postController);

export default controllers;
