import { Router } from "express";
import postService from "./posts.service";

const postController = Router();

postController.post("/:", postService.createPost);
postController.get("/", postService.getPost);
postController.get("/:postId", postService.getUniquePost);
postController.put("/:postId", postService.updatePost);
postController.delete("/:postId", postService.deletePost);

export default postController;
