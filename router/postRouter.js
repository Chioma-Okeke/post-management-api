const { Router } = require("express");
const {
    get_all_posts,
    get_a_post,
    create_a_post,
    update_a_post,
    delete_a_post,
} = require("../controller/posts");
const authMiddleware = require("../middleware/authMiddleware");

const postRouter = Router()
    .get("/post", get_all_posts)
    .get("/post/:id", get_a_post)

    .post("/post", authMiddleware, create_a_post)
    .put("/post/:id", authMiddleware, update_a_post)

    .delete("/post/:id", authMiddleware, delete_a_post);

module.exports = postRouter;
