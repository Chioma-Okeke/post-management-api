const generateToken = require("../jwt/tokengenerator");
const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400).json({ msg: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ msg: "Invalid email address" });
    }

    try {
        const user = await userModel.findOne({ email });
        if (user) {
            res.status(400).json({ msg: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            ...req.body,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        next({ status: 500, message: "SOmething went wrong" });
    }
};

const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                msg: "No existing user found with that email address",
            });
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return (
                res.status(400).json *
                { msg: "email address or password incorrect" }
            );
        }

        const { password: _, ...userData } = user.toObject();
        const token = generateToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3600000,
        });
        res.status(200).json({ msg: "User logged in", user: userData });
    } catch (error) {
        next({ status: 500, message: "Something went wrong" });
    }
};

const logout = async (req, res, next) => {
    res.cookie('token', "", {
        httpOnly: true,
        secure: process.env.NOD_ENV === "production",
        sameSite: "strict",
        maxAge: 0
    })
    res.status(200).json({msg: "User successfully logged out"})
}

module.exports = { register, login, logout };
