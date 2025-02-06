const postModel = require("../model/postModel");
const userModel = require("../model/userModel");

const get_all_posts = async (req, res, next) => {
    try {
        const allPosts = await postModel.find();
        res.status(200).json({ msg: "books fetched", books: allPosts });
    } catch (error) {
        next(error);
    }
};

const get_a_post = async (req, res, next) => {
    const { id } = req.params;
    try {
        const post = await postModel.findById(id);
        if (!post) {
            return res.status(404).json({ msg: "Post not found" });
        }
        res.status(200).json({ post });
    } catch (error) {
        next({ status: 404, message: "Post not found" });
    }
};

const create_a_post = async (req, res, next) => {
    const userInfo = req.user;
    // console.log(userInfo, "userInfo")

    try {
        const user = await userModel.findById(userInfo);
        console.log(user, "In here")
        if (!user) {
            return res
                .status(401)
                .json({ msg: "You need to be logged in to create a post" });
        }

        const newPost = new postModel({ ...req.body, userId: userInfo._id });
        const createdPost = await newPost.save();
        user.postIds.push(createdPost._id);
        await user.save();
        res.status(200).json({ createdPost });
    } catch (error) {
        next(error);
    }
};

const update_a_post = async (req, res, next) => {
    try {
        const userInfo = req.user;
        const update = req.body;
        const { id } = req.params;

        if (!userInfo.postIds.includes(id)) {
            return res
                .status(401)
                .json({ msg: "You can only edit posts created by you" });
        }

        try {
            const postUpdated = await postModel.findByIdAndUpdate(id, update, {
                new: true,
                runValidators: true,
            });
            if (!postUpdated) {
                return res.status(404).json({ msg: "No post found" });
            }
            res.status(200).json(postUpdated);
        } catch (error) {
            next({ status: 404 });
        }
    } catch (error) {
        next(error);
    }
};

const delete_a_post = async (req, res, next) => {
    const userInfo = req.user;
    const { id } = req.params;

    if (!userInfo.postIds.includes(id)) {
        return res
            .status(401)
            .json({ msg: "You can only delete post created by you" });
    }

    try {
        await postModel.findByIdAndDelete(id);
        res.status(200).json({ msg: "Post successfully deleted" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    get_all_posts,
    get_a_post,
    create_a_post,
    update_a_post,
    delete_a_post,
};
