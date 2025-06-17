const mongo=require('mongoose');


const userschema=mongo.Schema({
    name:String,
    number:String,
    email:String,
    password:String

})

module.exports= mongo.model('login_user',userschema);
