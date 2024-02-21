import { RequestHandler } from "express";
import client from "../../db/client.db";

//todo : create
const createPost: RequestHandler = async (req, res) => {
  try {
    const { title, content } = req.body;
    const result = await client.query(
      "INSERT INTO post(title, content) VALUES ($title, $value)",
      [title, content]
    );
    const post = result.rows[0];
    res.json(post);
  } catch (e) {
    throw e;
  }
};

//todo : readAll
const getPost: RequestHandler = async (req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM post");
    res.json(rows);
  } catch (e) {
    throw e;
  }
};

//todo : read  unique
const getUniquePost: RequestHandler<{ postId: string }> = async (req, res) => {
  try {
    const postId = req.params.postId;
    const result = await client.query("SELECT * FROM post WHERE id = $id", [
      postId,
    ]);
    const post = result.rows[0];
    res.json(post);
  } catch (e) {
    throw e;
  }
};

//todo : update
const updatePost: RequestHandler<{ postId: string }> = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { title, content } = req.body;
    const result = await client.query(
      "UPDATE post SET title = $title SET content = $content WHERE id = $id",
      [title, content, postId]
    );
    const post = result.rows[0];
    res.json(post);
  } catch (e) {
    throw e;
  }
};

//todo :delete
const deletePost: RequestHandler<{ postId: string }> = async (req, res) => {
  try {
    const postId = req.params.postId;
    const result = await client.query("DELETE * FROM post WHERE id = $id", [
      postId,
    ]);
    const post = result.rows[0];
    res.json(post);
  } catch (e) {
    throw e;
  }
};

const postService = {
  getPost,
  getUniquePost,
  updatePost,
  deletePost,
  createPost,
};

export default postService;
