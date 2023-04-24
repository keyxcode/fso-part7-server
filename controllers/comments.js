const commentsRouter = require("express").Router();
const Comment = require("../models/comment");

commentsRouter.get("/", async (request, response) => {
  const comments = await Comment.find({}).populate("blogs");
  response.json(comments);
});

commentsRouter.post("/:id/", async (request, response) => {
  const { content } = request.body;

  const comment = new Comment({
    content,
  });

  const savedComment = await comment.save();

  return response.status(201).json(savedComment);
});

module.exports = commentsRouter;
