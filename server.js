const express = require("express")
const authRouter = require("./router/authRouter")
const userRouter = require("./router/userRouter")
const postRouter = require("./router/postRouter")
const cookieParser = require("cookie-parser");
const err = require("./middleware/errorHandler");
const connectDb = require("./db/dbController");

const app = express()
require("dotenv").config()

const port = process.env.PORT

connectDb()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", authRouter)
app.use("/api", userRouter)
app.use("/api", postRouter)

app.use(err)

app.listen(port, console.log("server running..."))