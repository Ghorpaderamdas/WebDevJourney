const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({ title, body });
        const savedPost = await post.save();

        res.status(201).json({
            success: true,
            message: "Post created successfully",
            post: savedPost
        });
    } catch (err) {
        console.error("Error while creating post:", err);
        return res.status(500).json({
            success: false,
            error: "Failed to create post"
        });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            success: true,
            message: "Posts fetched successfully",
            data: posts
        });
    } catch (err) {
        console.error("Error while fetching posts:", err);
        return res.status(500).json({
            success: false,
            error: "Failed to fetch posts"
        });
    }
};
