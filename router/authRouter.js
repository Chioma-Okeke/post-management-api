const { Router } = require("express");
const { register } = require("../controller/userController");

const authRouter = Router()
    .post("/auth/register", register)
    .post("/auth/login")
    .post("/auth/logout");

module.exports = authRouter;
