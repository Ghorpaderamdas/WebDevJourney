const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const like = new Like({
      post: postId,
      user: userId,
    });
    const savedLike = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Error While Liking Post",
    });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { postId, likeId } = req.body;

    const deletedLike = await Like.findOneAndDelete({ post: postId, _id: likeId });

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $pull: { likes: likeId } },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Error While Unliking Post",
    });
  }
};
