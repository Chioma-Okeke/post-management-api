const { Router } = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { delete_a_user, update_a_user, get_a_user, create_a_user } = require("../controller/userController");

const userRouter = Router()
    .post("/users", create_a_user)  //admin role

    .get("/user/:id", get_a_user)

    .delete("/user/:id", authMiddleware, delete_a_user)

    .put("/user/:id", authMiddleware, update_a_user);

module.exports = userRouter