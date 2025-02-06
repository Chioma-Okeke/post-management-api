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
            res.status(400).json({msg: "User already exists"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            ...req.body,
            password: hashedPassword
        })

        await newUser.save()
        res.status(200).json(newUser)

    } catch (error) {
        next({ status: 500, message: "SOmething went wrong" });
    }
};

 const login = async (req, res, next) => {
    const {email, password} = req.body

    trycatch
 }

module.exports = {register}
