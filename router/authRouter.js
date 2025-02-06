const { Router } = require("express");
const { register, login, logout } = require("../controller/userController");

const authRouter = Router()
    .post("/auth/register", register)
    .post("/auth/login", login)
    .post("/auth/logout", logout);

module.exports = authRouter;
