require("dotenv").config()
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
const port = process.env.PORT||5000;
require('./db/connection')
app.use(cookieParser());
const router = require("./Routers/routes")
const auth = require("./Middleware/auth")
// app.use(cors())
app.use(cors(
    {
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
  ));
  app.get('http://localhost:8000', (req, res) => {
    // Get the value of the FinFriend cookie from the request
    const token = req.cookies.FinFriend;
  console.log(token);
    // Use the token to authenticate the user
    // ...
  });
  app.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })

app.use(router)

app.listen(port, ()=>{
    console.log(`Server is running on : http://localhost:${port}`);
})