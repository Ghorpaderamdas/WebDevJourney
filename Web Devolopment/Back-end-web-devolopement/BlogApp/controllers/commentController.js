const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
const { validationResult } = require("express-validator");

exports.createComment = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { postId, userId, body } = req.body;

        const existingPost = await Post.findById(postId);
        if (!existingPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        const comment = new Comment({
            post: postId,
            user: userId,
            body
        });

        const savedComment = await comment.save();

        existingPost.comments.push(savedComment._id);
        const updatedPost = await existingPost.save();

        res.status(201).json({
            post: updatedPost,
            comment: savedComment
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "Error while creating comment"
        });
    }
};
