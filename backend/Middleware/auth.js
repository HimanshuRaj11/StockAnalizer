const jwt = require("jsonwebtoken")

const User = require("../Models/Users");

const auth = async (req,res,next)=>{
    try {
        const cooki = req.cookies
        console.log(cooki);
        console.log("-----");
        const token = req.cookies.FinFriend;
        const verifyToken = await jwt.verify(token, process.env.secretJwtKey)
        const user = await User.findOne({_id: verifyToken._id})
        console.log(user);
        req.token = token;
        req.user = user;
        next()
    } catch (error) {
        console.log(error);
    }
}
module.exports = auth;