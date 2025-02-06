const { Router } = require("express");

const postRouter = Router()
    .get("/post")
    .get("/post/:id")

    .post("/post")
    .put("/post/:id")

    .delete("/post");

    module.exports = postRouter