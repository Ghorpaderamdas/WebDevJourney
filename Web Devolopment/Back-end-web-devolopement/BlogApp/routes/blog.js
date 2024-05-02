const express = require('express');
const router = express.Router();

const commentController = require("../controllers/commentController");
const postController = require("../controllers/postController");
const likeController = require("../controllers/likeController");

router.post("/comments/create", commentController.createComment);

router.post("/posts/create", postController.createPost);
router.get("/posts", postController.getAllPosts);

router.post("/likes/like", likeController.likePost);
router.post("/likes/unlike", likeController.unlikePost);

module.exports = router;
