const User = require("../Models/Users");
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken")
const auth = require("../Middleware/auth")

exports.SignIn = async (req, res) => {
  const { name, username, email, mobile, password, confirmPassword } = req.body;
  try {
    if (!name || !username || !email || !password) {
      return req.status(400).json({ message: "All fields are required!" });
    }
    if (password !== confirmPassword) {
      return req.status(400).json({ message: "Passwords are not matching!" });
    }
    if (password == confirmPassword) {
      const Password = bcrypt.hashSync(password, salt);

      const NewUser = new User({
        name,
        username,
        email,
        mobile,
        password: Password,
      });
      const token = await NewUser.genToken();
      const createdUser = await NewUser.save();
      res.status(200).json({ createdUser, token });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.Login = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  try {
    const findUseremail = await User.findOne({ email });
    if (!findUseremail) {
      return res.status(400).json({ message: "User Not exist.." });
    }
    const verifyUser = await bcrypt.compareSync(
      password,
      findUseremail.password
    );
    if (verifyUser) {
      const token = await findUseremail.genToken();
      return res.status(200).json({ message: findUseremail });
    } else {
      return res.status(400).json({ message: "Wrong Password" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
    console.log(error);
  }
};

exports.logout = async (req, res) => {
  const { Cookie } = req.body;
  const parseCookie = JSON.parse(Cookie)
  try {
    const verifyToken = await jwt.verify(parseCookie, process.env.secretJwtKey)
    const user = await User.findOne({_id: verifyToken._id})
    user.tokens = user.tokens.filter((element)=>{
      return element.token !== parseCookie
    })
    user.save();
    res.status(200).json({message:"Logout Success"})
  } catch (error) {
    console.log(error);
  }

};
