
// mongoDb connection

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/FinFriend',{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{console.log('Connection SuccessFull')})
.catch((e)=>{console.log(e)})

