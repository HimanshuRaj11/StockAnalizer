require("dotenv").config()

const express = require("express");
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors())
const port = process.env.PORT||5000;
require('./db/connection')

const router = require("./Routers/routes")



app.use(router)

app.listen(port, ()=>{
    console.log(`Server is running on : http://localhost:${port}`);
})