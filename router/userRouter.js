const { Router } = require("express");

const userRouter = Router()
    .post("/users")

    .get("/user/:id")

    .delete("/user/:id")

    .put("/user/:id");

module.exports = userRouter