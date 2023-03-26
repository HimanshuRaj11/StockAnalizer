require("dotenv").config()
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true,
        unique : true
    },
    mobile:{
        type: String,
        require: true,
        unique : true
    },
    email:{
        type: String,
        require: true,
        index:true,
        unique : true
    },
    emailVerify:{
        type:Boolean
    },
    phoneVerify:{
        type:Boolean
    },
    password:{
        type: String,
        require: true
    },
    profilePic:{
        type:String,
    },
    admin:{
        type:Boolean
    },
    tokens:[{
        token:{
          type: String,
          require: true
        }
      }],
}, {timestamps: true})

UserSchema.methods.genToken = async function(){
    try{
    const token = await jwt.sign({_id:this._id},process.env.secretJwtKey)
    this.tokens = this.tokens.concat({token})
    await this.save()

    return token
    }
    catch(e){
        console.log(e);
    }
}
module.exports = mongoose.model('User', UserSchema)