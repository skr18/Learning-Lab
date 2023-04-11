import express from "express";
import { getPosts, createPost, updatedPost, deletePost, likePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatedPost);
router.delete('/:id',deletePost);
router.patch("/:id/likePost",likePost)
export default router;
